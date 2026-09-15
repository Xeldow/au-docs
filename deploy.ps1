# au-docs 推送部署脚本
# 推送到 GitHub 后会自动触发 Pages 部署（约 1~2 分钟生效）
# 线上地址：https://docs.anotheru.cn
#
# 本文件必须是 UTF-8 BOM：Windows PowerShell 5.1 把无 BOM 的 UTF-8 当 GBK 解析，
# 中文双引号字符串会报「字符串缺少终止符」。

param(
    # 跳过交互确认，供已授权的自动化调用。默认仍要输入 y。
    [switch]$Yes
)

$ErrorActionPreference = "Stop"

if ($PSVersionTable.PSVersion.Major -le 5)
{
    $utf8 = New-Object System.Text.UTF8Encoding $false
    [Console]::OutputEncoding = $utf8
    $OutputEncoding = $utf8
}

Write-Host "`n=== au-docs deploy ===" -ForegroundColor Cyan

git status
Write-Host ""

if (-not $Yes)
{
    $confirm = Read-Host "确认推送到线上？(y/N)"
    if ($confirm -ne "y")
    {
        Write-Host "已取消。" -ForegroundColor Yellow
        exit 0
    }
}

git push
Write-Host "`n推送完成，等待 GitHub Actions 部署（1~2 分钟）..." -ForegroundColor Green
Write-Host "站点地址：https://docs.anotheru.cn" -ForegroundColor Cyan
