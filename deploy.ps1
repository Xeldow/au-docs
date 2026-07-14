# au-docs 推送部署脚本
# 推送到 GitHub 后会自动触发 Pages 部署（约 1~2 分钟生效）
# 线上地址：https://docs.anotheru.cn

$ErrorActionPreference = "Stop"

Write-Host "`n=== au-docs deploy ===" -ForegroundColor Cyan

git status
Write-Host ""

$confirm = Read-Host "确认推送到线上？(y/N)"
if ($confirm -ne "y")
{
    Write-Host "已取消。" -ForegroundColor Yellow
    exit 0
}

git push
Write-Host "`n推送完成，等待 GitHub Actions 部署（1~2 分钟）..." -ForegroundColor Green
Write-Host "站点地址：https://docs.anotheru.cn" -ForegroundColor Cyan
