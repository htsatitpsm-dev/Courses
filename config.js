// วาง URL ของ Web App ที่ได้จาก Google Apps Script ตรงนี้ (ลงท้ายด้วย /exec)
const API_URL = "https://script.google.com/macros/s/AKfycbxwG1v79IaQlCYR6dPIo0JKs3XUOuPpS4XyHJhieyG9vNhM9EruKixiQLeDYFsHMlY/exec";

// ฟังก์ชันกลางสำหรับเรียก Google Sheet (ใช้ทั้งหน้า login และ register)
async function callSheet(payload) {
  if (API_URL.includes("ใส่_ID")) {
    return { ok: false, error: "ยังไม่ได้ตั้งค่า API_URL ในไฟล์ config.js" };
  }
  try {
    // ไม่ใส่ Content-Type เพื่อให้เป็น text/plain จะได้ไม่ติด CORS preflight
    const res = await fetch(API_URL, { method: "POST", body: JSON.stringify(payload) });
    return await res.json();
  } catch (e) {
    return { ok: false, error: "เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ ลองใหม่อีกครั้ง" };
  }
}
