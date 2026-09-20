# PlayPark Download Site

หน้าเว็บไซต์สาธารณะสำหรับดาวน์โหลด Installer ของ PlayPark Desktop Bot

## รันในเครื่อง

```powershell
cd download_site
python -m http.server 8770 --bind 127.0.0.1
```

เปิด `http://127.0.0.1:8770/`

## การอัปเดตเว็บไซต์และโปรแกรม

1. เปลี่ยน `APP_VERSION` ใน `python_desktop/playpark_desktop/version.py`
2. เปลี่ยน `MyAppVersion` ใน `python_desktop/installer/PlayParkDesktopBot.iss`
3. แก้ `python_desktop/RELEASE_NOTES.md`
4. รัน tests แล้ว build/test EXE ด้วย `python_desktop/build.ps1`
5. build/test Installer ด้วย `python_desktop/build_installer.ps1`
6. รัน `release_tools.py package`, `draft` และ `publish` ตามลำดับ
7. แก้เวอร์ชันสำรองใน `index.html` หากต้องการ หน้าเว็บจะอ่านเวอร์ชันและขนาดล่าสุดจาก GitHub Releases อัตโนมัติ
8. คัดลอกไฟล์ในโฟลเดอร์นี้ไปยัง root ของ Public repository `PlayParkDownload` แล้ว push เข้า `main`

ปุ่มดาวน์โหลดใช้ URL `releases/latest/download/PlayParkDesktopBotSetup.exe` จึงชี้ไป Installer ล่าสุดโดยไม่ต้องแก้ลิงก์ทุกเวอร์ชัน
