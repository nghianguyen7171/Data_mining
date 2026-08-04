# Lab 0 — Thiết lập môi trường & Dự án Orange đầu tiên

**Môn:** IST 4520 – Data Mining (bản điều chỉnh cho ngành Business Analytics)
**Hình thức:** Seminar / Lab · **Thời lượng:** 90 phút
**Tuần:** 2

> **Mục tiêu Lab 0:** Sau buổi này, mỗi sinh viên có (1) môi trường luyện Python/pandas — VS Code trên máy **hoặc** Google Colab trên trình duyệt; (2) Orange đã cài và chạy được; (3) hoàn thành một dự án khám phá dữ liệu kinh tế đầu tiên trong Orange.
>
> **Tài liệu này viết cho sinh viên chưa quen coding.** Cứ làm theo từng bước, không cần hiểu hết ngay. Nếu kẹt ở bước nào, giơ tay hỏi.

**Cần chuẩn bị:** laptop (Windows / macOS / Linux), kết nối Internet, tài khoản Google (cho phần Colab).

---

## Tổng quan buổi học

| Phần | Nội dung | Thời lượng |
|------|----------|-----------:|
| A | Cài đặt Visual Studio Code (luyện Python/pandas trên máy) | 20' |
| B | Google Colab (giải pháp không cần cài đặt) | 15' |
| C | Cài đặt Orange Data Mining | 10' |
| D | **Dự án Orange đầu tiên** — khám phá dữ liệu kinh tế HDI | 40' |
| — | Tổng kết & bài nộp | 5' |

> Phần A và B là hai lựa chọn cho **cùng một mục đích** (chạy Python). Sinh viên chỉ cần dùng thành thạo **một** trong hai. Khuyến nghị: cài VS Code để dùng lâu dài; Colab là phương án dự phòng khi máy yếu hoặc cài đặt trục trặc.

---

## Phần A — Cài đặt Visual Studio Code (20 phút)

**Visual Studio Code (VS Code)** là trình soạn thảo code miễn phí, phổ biến nhất hiện nay. Ta dùng nó để luyện Python/pandas trên máy.

### A1. Cài Python trước (bắt buộc)

VS Code cần Python để chạy code.

**Windows:**
1. Vào https://www.python.org/downloads → nhấn **Download Python** (bản mới nhất).
2. Mở file `.exe` vừa tải.
3. **QUAN TRỌNG:** ở màn hình đầu tiên, tick vào ô **"Add Python to PATH"** (ở dưới cùng) *trước khi* nhấn Install.
4. Nhấn **Install Now** → chờ xong → **Close**.

**macOS:**
1. Vào https://www.python.org/downloads → tải bản macOS.
2. Mở file `.pkg` và làm theo hướng dẫn (Continue → Agree → Install).
   *(Máy Mac có sẵn Python nhưng nên cài bản mới từ python.org để đồng nhất.)*

**Kiểm tra Python đã cài:** mở Terminal (macOS) hoặc Command Prompt (Windows), gõ:
```bash
python --version
```
Nếu hiện ra `Python 3.x.x` → thành công. (Trên macOS có thể phải gõ `python3 --version`.)

### A2. Tải & cài VS Code

1. Vào https://code.visualstudio.com → nhấn nút **Download** (trang tự nhận diện hệ điều hành).
2. **Windows:** mở file `.exe`, tick **"Add to PATH"** nếu được hỏi, nhấn Next → Install → Finish.
3. **macOS:** mở file `.zip`, kéo **Visual Studio Code** vào thư mục **Applications**.
4. **Linux:** tải gói `.deb` (Ubuntu) hoặc `.rpm` và cài qua trình quản lý gói.

### A3. Cài extension Python cho VS Code

1. Mở VS Code.
2. Nhấn biểu tượng **Extensions** ở thanh dọc bên trái (hình 4 ô vuông), hoặc `Ctrl+Shift+X` (Windows) / `Cmd+Shift+X` (Mac).
3. Gõ **"Python"** vào ô tìm kiếm → chọn extension **Python** của Microsoft → nhấn **Install**.
4. Cài thêm extension **Jupyter** của Microsoft (tương tự) để chạy được notebook `.ipynb`.

### A4. Cài thư viện pandas

1. Trong VS Code, mở Terminal: menu **Terminal → New Terminal** (hoặc `` Ctrl+` ``).
2. Gõ lệnh:
```bash
pip install pandas
```
   (Trên macOS nếu báo lỗi, thử `pip3 install pandas`.)

### A5. Chạy thử một đoạn Python

1. Tạo file mới: **File → New File** → lưu tên `test.py` (**File → Save**).
2. Gõ vào:
```python
import pandas as pd
print("Xin chào, pandas!")
print(pd.__version__)
```
3. Nhấn nút **▶ Run** ở góc trên bên phải (hoặc chuột phải → *Run Python File in Terminal*).
4. Nếu khung Terminal hiện dòng chữ "Xin chào, pandas!" và số phiên bản → **môi trường VS Code đã sẵn sàng.**

> **Nếu gặp trục trặc cài đặt:** đừng lo, chuyển sang **Phần B (Google Colab)** — không cần cài gì cả, vẫn luyện được pandas.

---

## Phần B — Google Colab (15 phút)

**Google Colab** cho phép chạy Python ngay trên trình duyệt, **không cần cài đặt**, miễn phí, chỉ cần tài khoản Google. Rất hợp khi máy yếu hoặc cài local trục trặc.

### B1. Mở Colab & tạo notebook

1. Vào https://colab.research.google.com (đăng nhập tài khoản Google nếu được hỏi).
2. Nhấn **File → New notebook** (Tệp → Sổ tay mới).
3. Một notebook trống hiện ra, gồm các **ô (cell)** để viết code.

### B2. Chạy code trong ô

1. Nhấp vào ô trống, gõ:
```python
import pandas as pd
print("Colab đã chạy pandas!")
```
2. Nhấn **▶** bên trái ô (hoặc `Shift + Enter`) để chạy.
3. Kết quả hiện ngay dưới ô. *(pandas có sẵn trong Colab, không cần cài.)*

### B3. Thử vài lệnh pandas với dữ liệu mẫu

Gõ vào một ô mới và chạy:
```python
import pandas as pd

# Đọc dữ liệu kinh tế mẫu trực tiếp từ Internet
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

df.head()        # xem 5 dòng đầu
```
Chạy tiếp từng ô:
```python
df.shape         # (số dòng, số cột)
```
```python
df.describe()    # thống kê mô tả
```

### B4. Tải file của mình lên Colab (khi cần)

1. Nhấn biểu tượng **thư mục** (Files) ở thanh trái.
2. Nhấn biểu tượng **Upload** (mũi tên lên) → chọn file CSV từ máy.
3. Đọc file: `df = pd.read_csv("ten_file.csv")`.

### B5. Lưu bài

- Colab tự lưu vào Google Drive. Hoặc **File → Save a copy in Drive** để chắc chắn.

> **Chốt phần A & B:** Sinh viên chỉ cần **một** môi trường Python hoạt động. Nếu VS Code đã chạy được ở A5, hoặc Colab đã chạy được ở B3 → đạt yêu cầu.

---

## Phần C — Cài đặt Orange Data Mining (10 phút)

Orange là công cụ **chính** của môn học. Phần này tóm tắt; hướng dẫn chi tiết theo từng hệ điều hành nằm ở file **`Install_Instruction.md`**.

### Các bước nhanh

1. Vào https://orangedatamining.com/download.
2. Tải bản cho hệ điều hành của bạn:
   - **Windows:** `Orange3-...-x86_64.exe` (standalone).
   - **macOS:** chọn bản **Apple Silicon** hoặc **Intel** (kiểm tra qua  → About This Mac → mục Chip).
   - **Linux:** cài qua Anaconda (xem Install_Instruction).
3. Cài đặt:
   - **Windows:** mở file `.exe`, nếu SmartScreen chặn thì *More info → Run anyway*, rồi Next → Install.
   - **macOS:** mở `.dmg`, kéo Orange vào **Applications**; mở lần đầu bằng cách **chuột phải → Open**.
4. Mở Orange → thấy màn hình chào (Welcome) → **cài đặt thành công.**

> Orange đã đóng gói sẵn Python bên trong, **không liên quan** đến bản Python cài ở Phần A. Hai cái độc lập nhau.

---

## Phần D — Dự án Orange đầu tiên: Khám phá dữ liệu kinh tế HDI (40 phút)

Ta sẽ xây một workflow hoàn chỉnh để **khám phá Chỉ số Phát triển Con người (Human Development Index – HDI)** — bộ dữ liệu kinh tế theo quốc gia gồm các chỉ số như GDP bình quân đầu người, tuổi thọ, trình độ giáo dục. Đây là dữ liệu quen thuộc trong phân tích kinh tế - xã hội.

> **Bối cảnh kinh doanh (Business Understanding):** Giả sử bạn là nhà phân tích tại một quỹ đầu tư quốc tế, cần hiểu **các quốc gia khác nhau thế nào về mức phát triển kinh tế** và **yếu tố nào đi cùng với thu nhập cao**. Đây chính là bước đầu của quy trình CRISP-DM đã học ở Buổi 1.

**Chúng ta sẽ xây workflow này:**
```
                    ┌──→ Data Table
                    │
[Datasets: HDI] ────┼──→ Feature Statistics
                    │
                    ├──→ Distributions
                    │
                    └──→ Scatter Plot
```

### Bước D1 — Mở Orange và tạo workflow mới

1. Mở Orange.
2. Ở màn hình chào, nhấn **New** (hoặc menu **File → New**).
3. Bạn thấy một **canvas** trắng ở giữa và **danh mục widget** ở cột trái (Data, Visualize, Model, Evaluate...).

### Bước D2 — Nạp dữ liệu bằng widget "Datasets"

1. Trong cột trái, mục **Data**, tìm widget **Datasets** → kéo thả ra canvas.
2. Nhấp đúp vào widget **Datasets** → cửa sổ hiện danh sách bộ dữ liệu tải sẵn từ Internet.
3. Gõ **"HDI"** vào ô tìm kiếm ở trên.
4. Chọn dòng **HDI** (Human Development Index) → Orange tự tải về.
5. Đóng cửa sổ. Widget giờ có dữ liệu HDI ở đầu ra.

> *Nếu không thấy HDI trong danh sách:* dùng widget **File** thay thế, tải bản `.tab` tại https://datasets.biolab.si/core/HDI.tab rồi mở bằng File.

### Bước D3 — Xem bảng dữ liệu (Data Table)

1. Kéo widget **Data Table** (mục Data) ra canvas.
2. **Nối hai widget:** rê chuột từ vòng cung bên phải widget **Datasets** sang widget **Data Table** (một đường nối xuất hiện).
3. Nhấp đúp **Data Table** để mở.

**Quan sát và ghi lại:**
- Có bao nhiêu **dòng** (mỗi dòng = một quốc gia) và bao nhiêu **cột** (mỗi cột = một chỉ số)?
- Nhận diện vài cột kinh tế: ví dụ chỉ số HDI, GDP/GNI bình quân đầu người, tuổi thọ, số năm đi học.
- Nhấp vào tiêu đề một cột số để **sắp xếp** → quốc gia nào có HDI cao nhất? Thấp nhất?

### Bước D4 — Thống kê mô tả (Feature Statistics)

1. Kéo widget **Feature Statistics** ra canvas.
2. Nối **Datasets → Feature Statistics**.
3. Nhấp đúp để mở.

**Quan sát:** với mỗi cột số, xem giá trị **trung bình (mean)**, **nhỏ nhất/lớn nhất (min/max)**, phân bố, và **tỷ lệ giá trị thiếu (missing)**.
- Cột nào có giá trị thiếu? (ghi lại — sẽ xử lý ở các tuần sau về Data Preparation.)
- Khoảng cách giữa min và max của GDP bình quân nói lên điều gì về chênh lệch giàu-nghèo giữa các quốc gia?

### Bước D5 — Phân bố một biến (Distributions)

1. Kéo widget **Distributions** ra canvas.
2. Nối **Datasets → Distributions**.
3. Nhấp đúp mở ra, ở ô chọn biến bên trái chọn **HDI** (hoặc chỉ số phát triển).

**Quan sát:** biểu đồ cho thấy các quốc gia phân bố thế nào theo mức phát triển — tập trung ở nhóm cao, thấp, hay đều? Thử đổi sang biến **tuổi thọ** và so sánh.

### Bước D6 — Tìm mối liên hệ bằng Scatter Plot (bước "aha")

Đây là bước thú vị nhất — xem hai chỉ số kinh tế liên hệ ra sao.

1. Kéo widget **Scatter Plot** (mục **Visualize**) ra canvas.
2. Nối **Datasets → Scatter Plot**.
3. Nhấp đúp mở ra:
   - **Trục X:** chọn **GDP/GNI bình quân đầu người**.
   - **Trục Y:** chọn **tuổi thọ** (life expectancy).
   - Ở phần **Color**, chọn biến **HDI** (nếu có) để tô màu điểm.

**Quan sát & diễn giải:**
- Các điểm có xu hướng đi lên không? → quốc gia GDP cao thường có tuổi thọ cao hơn.
- Đây chính là ý tưởng **correlation** (Tuần 5). Bạn vừa *nhìn thấy* một mối liên hệ kinh tế bằng mắt.
- Nhấp vào một điểm bất kỳ để xem đó là quốc gia nào.

### Bước D7 — Lưu workflow

1. **File → Save As** → đặt tên `lab0_HDI.ows` → lưu vào thư mục học tập của bạn.
2. File `.ows` lưu lại toàn bộ sơ đồ để mở lại lần sau.

### Bước D8 — Viết mini-memo (diễn giải kinh doanh)

Viết 4–5 câu trả lời câu hỏi kinh doanh ban đầu, ví dụ:

> *"Bộ dữ liệu HDI gồm [số] quốc gia với các chỉ số phát triển. Mức phát triển chênh lệch lớn: HDI cao nhất là [nước], thấp nhất là [nước]. Biểu đồ phân tán cho thấy GDP bình quân và tuổi thọ có xu hướng đi cùng nhau — quốc gia giàu hơn thường có tuổi thọ cao hơn. Với một quỹ đầu tư, phát hiện này gợi ý nhóm quốc gia đáng chú ý là..."*

Đây là kỹ năng cốt lõi được chấm điểm suốt môn học: **biến kết quả phân tích thành thông điệp kinh doanh.**

---

## Tổng kết & Bài nộp (5 phút)

**Hôm nay bạn đã:**
- Thiết lập môi trường Python (VS Code hoặc Colab).
- Cài Orange thành công.
- Xây dựng và lưu một workflow khám phá dữ liệu kinh tế hoàn chỉnh.

**Bài nộp Lab 0 (cuối buổi hoặc trước tuần sau):**
1. Ảnh chụp màn hình môi trường Python chạy được (Terminal ở VS Code **hoặc** ô Colab in ra "pandas").
2. File workflow **`lab0_HDI.ows`**.
3. Ảnh chụp **Scatter Plot** đã tạo ở Bước D6.
4. **Mini-memo** 4–5 câu ở Bước D8.

---

## Bài tập mở rộng (tự làm, khuyến khích)

1. Trong Scatter Plot, đổi trục sang cặp biến khác (ví dụ *số năm đi học* vs *HDI*) — mối liên hệ có rõ không?
2. Thêm widget **Box Plot** (Visualize), nối từ Datasets, xem phân bố một chỉ số và phát hiện quốc gia ngoại lệ (outlier).
3. Trong Colab, đọc thử một file CSV kinh tế bất kỳ bạn tìm được và chạy `df.describe()`.

---

## Xử lý sự cố thường gặp

| Vấn đề | Cách xử lý |
|--------|-----------|
| VS Code: `python` không nhận lệnh | Cài lại Python và **tick "Add to PATH"**; khởi động lại VS Code |
| `pip install pandas` báo lỗi trên Mac | Dùng `pip3 install pandas` |
| Không cài được gì trên máy | Chuyển hẳn sang **Google Colab** (Phần B) |
| Orange: Mac chặn "cannot be opened" | Chuột phải vào Orange → **Open**; hoặc System Settings → Privacy & Security → *Open Anyway* |
| Widget Datasets không tải được HDI | Kiểm tra Internet; hoặc tải `.tab` thủ công rồi dùng widget **File** |
| Nối widget không được | Rê chuột từ **mép phải** widget nguồn sang **mép trái** widget đích |

---

## Tham chiếu

- Tài liệu môn học liên quan (cùng thư mục): `Install_Instruction.md` (cài Orange chi tiết), `Tutorial_Orange_SampleProject.md` (dự án mô hình hóa đầy đủ), `lec1.md` (khái niệm CRISP-DM & ôn pandas).
- Dữ liệu HDI: https://datasets.biolab.si/core/HDI.tab
- VS Code: https://code.visualstudio.com · Python: https://www.python.org/downloads
- Google Colab: https://colab.research.google.com
- Orange: https://orangedatamining.com/download · Get started: https://orangedatamining.com/getting-started

---

*Biên soạn cho môn IST 4520 – Data Mining (bản điều chỉnh cho ngành Business Analytics). Cập nhật: tháng 7/2026.*
