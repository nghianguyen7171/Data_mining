# Hướng dẫn cài đặt Orange Data Mining

Tài liệu hướng dẫn tải và cài đặt **Orange Data Mining** — công cụ chính của môn IST 4520 Data Mining — theo từng bước cho **macOS, Windows và Linux**.

> Phiên bản mới nhất tại thời điểm biên soạn: **Orange 3.40.0** (đóng gói sẵn Python 3.12). Luôn tải từ trang chính thức: **https://orangedatamining.com/download**
> Bản standalone đã có sẵn Python và các thư viện phổ biến (pandas, scikit-learn) — **không cần cài Python riêng**.

---

## Yêu cầu hệ thống (tối thiểu)

- RAM: 4 GB (khuyến nghị 8 GB để chạy mượt với dữ liệu lớn hơn)
- Dung lượng trống: ~2 GB
- Kết nối Internet để tải bản cài (~600 MB) và cài add-on

---

## A. Cài trên macOS

Orange có hai bản cho Mac. **Trước tiên cần biết máy dùng chip Apple Silicon hay Intel.**

**Bước 0 — Xác định loại chip:**
1. Nhấn logo  (Apple) ở góc trên bên trái màn hình.
2. Chọn **About This Mac**.
3. Xem dòng **Chip** hoặc **Processor**:
   - Thấy **Apple** (M1/M2/M3/M4...) → dùng bản **Apple Silicon**.
   - Thấy **Intel** → dùng bản **Intel**.

**Bước 1 — Tải file:**
- Vào https://orangedatamining.com/download → mục **macOS**.
- Apple Silicon: tải `Orange3-3.40.0-Python3.12.10-arm64.dmg`
- Intel: tải `Orange3-3.40.0-Python3.12.10-x86_64.dmg`

**Bước 2 — Cài đặt:**
1. Mở file `.dmg` vừa tải (nhấp đúp).
2. Cửa sổ hiện ra — **kéo biểu tượng Orange vào thư mục Applications**.
3. Chờ quá trình sao chép hoàn tất, rồi đẩy (eject) ổ đĩa `.dmg` ra.

**Bước 3 — Mở lần đầu (quan trọng):**
- macOS có thể chặn ứng dụng ngoài App Store và báo *"Orange can't be opened because Apple cannot check it for malicious software"*.
- Cách xử lý: mở **Finder → Applications**, **nhấp chuột phải** vào Orange → chọn **Open** → trong hộp thoại nhấn **Open** lần nữa. (Chỉ cần làm một lần cho lần mở đầu tiên.)
- Nếu vẫn bị chặn: vào **System Settings → Privacy & Security**, kéo xuống mục thông báo về Orange và nhấn **Open Anyway**.

**Bước 4 — Kiểm tra:** Orange mở ra màn hình chào (Welcome) với các workflow mẫu → cài đặt thành công.

---

## B. Cài trên Windows

Có hai lựa chọn. Khuyến nghị **Standalone installer** cho hầu hết sinh viên.

### Cách 1 — Standalone installer (khuyến nghị)

**Bước 1 — Tải file:**
- Vào https://orangedatamining.com/download → mục **Windows**.
- Tải `Orange3-3.40.0-x86_64.exe`.

**Bước 2 — Cài đặt:**
1. Nhấp đúp file `.exe` vừa tải.
2. Nếu Windows hiện cảnh báo **"Windows protected your PC"** (SmartScreen): nhấn **More info** → **Run anyway**.
3. Làm theo trình cài đặt: **Next → chấp nhận license → chọn thư mục → Install**.
   - *Không cần quyền admin* — có thể cài cho tài khoản người dùng hiện tại.
4. Nhấn **Finish** khi hoàn tất.

**Bước 3 — Mở:** Tìm **Orange** trong Start Menu và khởi chạy.

### Cách 2 — Portable (không cần cài đặt)

Phù hợp khi dùng máy phòng lab / không có quyền cài phần mềm.
1. Tải `Orange3-3.40.0.zip` từ trang download.
2. **Giải nén** ra một thư mục bất kỳ (hoặc USB).
3. Mở thư mục vừa giải nén, chạy shortcut **Orange** bên trong.

---

## C. Cài trên Linux

Linux không có bản installer đóng gói sẵn; cài qua **Anaconda** (khuyến nghị) hoặc **pip**.

### Cách 1 — Anaconda / Miniconda (khuyến nghị)

**Bước 1 —** Cài Anaconda hoặc Miniconda nếu chưa có: https://www.anaconda.com/download

**Bước 2 —** Mở Terminal và tạo môi trường riêng cho Orange:
```bash
conda create python=3.11 --yes --name orange3
conda activate orange3
```

**Bước 3 —** Thêm kênh conda-forge:
```bash
conda config --add channels conda-forge
conda config --set channel_priority strict
```

**Bước 4 —** Cài Orange:
```bash
conda install orange3
```

**Bước 5 —** Chạy Orange:
```bash
python -m Orange.canvas
```
(Lần sau chỉ cần `conda activate orange3` rồi chạy lại lệnh trên.)

### Cách 2 — Pip

Dùng khi bạn quản lý Python theo cách riêng.
```bash
# Nếu hệ thống chưa có PyQt, cài trước:
pip install PyQt6 PyQt6-WebEngine

# Cài Orange:
pip install orange3

# Chạy:
python -m Orange.canvas
```
> Một số bản phân phối Linux cần thêm gói hệ thống (ví dụ thư viện Qt). Nếu gặp lỗi thiếu thư viện, cài các gói tương ứng từ trình quản lý gói của bản phân phối (apt, dnf...).

---

## D. Cài Add-on (tùy chọn, khi cần)

Một số tính năng nâng cao (ví dụ **Text Mining** cho Tuần 13) nằm trong add-on:
1. Mở Orange → menu **Options → Add-ons**.
2. Tick chọn add-on cần cài (ví dụ *Text*, *Associate*).
3. Nhấn **OK** và chờ cài xong → **khởi động lại Orange**.

---

## E. Kiểm tra cài đặt thành công

1. Mở Orange, tạo workflow mới.
2. Kéo widget **File** vào canvas, nhấp đúp, chọn một dataset mẫu (ví dụ *iris*).
3. Kéo widget **Data Table**, nối từ **File** sang, nhấp đúp để xem dữ liệu hiển thị.

Nếu bảng dữ liệu hiện ra → Orange đã sẵn sàng cho môn học.

---

## Xử lý sự cố thường gặp

| Vấn đề | Cách xử lý |
|--------|-----------|
| **Mac:** "Apple cannot check it for malicious software" | Nhấp chuột phải → Open; hoặc System Settings → Privacy & Security → Open Anyway |
| **Windows:** SmartScreen chặn cài đặt | Nhấn *More info* → *Run anyway* |
| Tải file rất chậm | Thử lại vào giờ khác, hoặc dùng bản Portable (Windows) |
| Orange mở rồi tự tắt / lỗi khởi động | Gỡ và cài lại; đảm bảo đủ RAM và dung lượng trống |
| Thiếu widget (ví dụ Text) | Cài add-on tương ứng qua Options → Add-ons |
| **Linux:** lỗi thiếu thư viện Qt | Cài gói Qt từ trình quản lý gói của distro |

**Cần hỗ trợ thêm:** trang tài liệu chính thức https://orangedatamining.com/docs · Get started: https://orangedatamining.com/getting-started

---

*Biên soạn cho môn IST 4520 – Data Mining (bản điều chỉnh cho ngành Business Analytics). Cập nhật: tháng 7/2026.*
