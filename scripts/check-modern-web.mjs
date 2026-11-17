import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'

const require = createRequire(import.meta.url)
const packagePath = require.resolve('modern-web-guidance/package.json')
const { bin } = require(packagePath)
const cli = resolve(dirname(packagePath), bin['modern-web-guidance'])
const result = spawnSync(process.execPath, [cli, 'legacy-scan', 'src', '--json'], {
  encoding: 'utf8',
})

if (result.stdout) process.stdout.write(result.stdout)
if (result.stderr) process.stderr.write(result.stderr)
if (result.error || result.status !== 0) {
  console.error('Modern Web Guidance scan failed.', result.error ?? '')
  process.exit(1)
}

try {
  const { totalFindings } = JSON.parse(result.stdout)
  if (!Number.isSafeInteger(totalFindings) || totalFindings < 0)
    throw new Error('Invalid finding count')
  if (totalFindings > 0) process.exitCode = 1
} catch (error) {
  console.error('Invalid Modern Web Guidance scan output:', error.message)
  process.exitCode = 1
}
