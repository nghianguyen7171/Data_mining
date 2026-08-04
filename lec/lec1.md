# Buổi 1 — Nhập môn Data Mining & Quy trình CRISP-DM

**Môn:** IST 4520 – Data Mining (bản điều chỉnh cho ngành Business Analytics)
**Hình thức:** Lecture · **Thời lượng:** 90 phút
**Đọc bám sát:** North, *Data Mining for the Masses*, **Chương 1 – Introduction to Data Mining and CRISP-DM**
**Công cụ minh họa:** Orange Data Mining

---

## Mục tiêu buổi học

Kết thúc buổi 1, sinh viên có thể:

1. Giải thích data mining là gì và phân biệt với báo cáo/thống kê thông thường.
2. Nêu vì sao data mining quan trọng trong ra quyết định kinh doanh.
3. Nhận diện các khái niệm nền về dữ liệu: dòng, cột, kiểu biến, dữ liệu có/không cấu trúc.
4. Mô tả 6 giai đoạn của quy trình **CRISP-DM** và vai trò của từng giai đoạn.
5. Hình dung một dự án data mining hoàn chỉnh trông như thế nào trong Orange.

*(Các mục tiêu này phục vụ SLO #1, #5, #6 của đề cương môn học.)*

---

## Chuẩn bị trước buổi học (dành cho sinh viên)

- Không yêu cầu kiến thức lập trình.
- Khuyến khích lướt qua Chương 1 sách North nếu có thể (không bắt buộc cho buổi đầu).

---

## Dàn thời gian 90 phút

| Thời lượng | Phần | Nội dung |
|-----------:|------|----------|
| 10' | 1 | Giới thiệu môn học & cách vận hành |
| 15' | 2 | Data mining là gì & vì sao quan trọng |
| 15' | 3 | "Dữ liệu là gì?" — khái niệm nền |
| 25' | 4 | Quy trình CRISP-DM (phần lõi) |
| 15' | 5 | Tổng quan công cụ + demo Orange |
| 10' | 6 | Tổng kết & giao chuẩn bị cho Lab tuần 2 |

---

## Phần 1 — Giới thiệu môn học (10 phút)

**Nội dung cần truyền đạt:**

- **Định vị môn học:** Đây là môn về *tư duy phân tích kinh doanh* (business-analytic thinking), không phải môn lập trình. Sinh viên BA sẽ học cách *đặt câu hỏi đúng, chọn kỹ thuật phù hợp, và diễn giải kết quả* — chứ không phải viết thuật toán từ đầu.
- **Cách vận hành:** mô hình **Lecture – Seminar xen kẽ**. Tuần lý thuyết học khái niệm; tuần seminar thực hành trên Orange và viết business memo. Slide đăng trước cuối tuần; sinh viên đọc trước khi tới lớp.
- **Công cụ:** **Orange Data Mining** (kéo-thả, miễn phí, đa nền tảng) làm chính; **Python** chỉ ở mức đọc-hiểu. Đã bỏ R và RapidMiner để sinh viên không quá tải.
- **Giáo trình:** *Data Mining for the Masses* (North) — miễn phí, hợp pháp.
- **Đánh giá:** lab hằng tuần + memo (25), dự án nhóm (20), midterm (15), final (15), Excel exercise (10), presentations (10), tham gia (5).

> **Thông điệp trấn an (nói rõ với lớp):** *"Nếu các em biết dùng Excel và tư duy logic, các em học được môn này. Phần mềm sẽ lo phần tính toán."*

---

## Phần 2 — Data Mining là gì & vì sao quan trọng (15 phút)

### Định nghĩa

**Data mining** là quá trình khám phá các **quy luật (patterns), mối quan hệ và tri thức hữu ích** ẩn trong những tập dữ liệu lớn, nhằm hỗ trợ ra quyết định (North, Ch. 1).

Điểm mấu chốt để phân biệt:
- **Báo cáo/thống kê truyền thống** trả lời *"chuyện gì đã xảy ra?"* (ví dụ: doanh số quý trước là bao nhiêu).
- **Data mining** trả lời *"điều gì có khả năng xảy ra?"* và *"tại sao?"* (ví dụ: khách hàng nào sắp rời bỏ, và vì yếu tố gì).

### Vì sao quan trọng với Business Analytics

Trong nền kinh tế dựa trên dữ liệu, tổ chức thu thập lượng dữ liệu khổng lồ nhưng giá trị chỉ xuất hiện khi biến dữ liệu thành *quyết định*. Nhà phân tích kinh doanh là cầu nối giữa dữ liệu và quyết định đó.

**Ví dụ thực tế (cho lớp liên hệ ngay):**
- Shopee/Amazon gợi ý "sản phẩm bạn có thể thích" → *Association Rules* (Tuần 5).
- Netflix/YouTube đề xuất nội dung → phân nhóm & dự báo sở thích.
- Ngân hàng phát hiện giao dịch gian lận → *Classification* (Tuần 9).
- Doanh nghiệp dự đoán khách hàng rời bỏ (churn) → *Logistic Regression* (Tuần 11).

### Bốn nhóm bài toán lớn của môn học

1. **Mô tả (Describe):** tóm tắt và trực quan hóa dữ liệu — *dữ liệu nói gì?*
2. **Tìm mối liên hệ (Relate):** correlation, association — *cái gì đi cùng cái gì?*
3. **Phân nhóm (Group):** clustering — *các đối tượng tự nhiên chia thành mấy nhóm?*
4. **Dự báo (Predict):** classification, regression — *điều gì sẽ xảy ra?*

> **Hoạt động tương tác (2–3'):** Hỏi lớp — *"Kể một lần các em thấy một ứng dụng/website như đoán trước được điều mình muốn."* Dùng câu trả lời để dẫn vào bốn nhóm bài toán.

---

## Phần 3 — "Dữ liệu là gì?" (15 phút)

Trước khi khai thác dữ liệu, phải hiểu dữ liệu được tổ chức thế nào (North, Ch. 1 & Ch. 2).

### Cấu trúc bảng dữ liệu

- **Dòng (row / observation / instance):** một đối tượng quan sát — ví dụ một khách hàng, một giao dịch, một hành khách.
- **Cột (column / attribute / variable / feature):** một đặc điểm của đối tượng — ví dụ tuổi, giới tính, số tiền mua.
- **Biến mục tiêu (target / label):** cột ta muốn dự đoán hoặc giải thích (ví dụ: khách có rời bỏ không).

### Các kiểu biến

| Kiểu | Mô tả | Ví dụ |
|------|-------|-------|
| **Định lượng (numeric)** | Giá trị số, tính toán được | tuổi, thu nhập, số đơn hàng |
| **Phân loại (categorical / nominal)** | Nhãn, nhóm | giới tính, thành phố, hạng thẻ |
| **Thứ bậc (ordinal)** | Phân loại có thứ tự | mức hài lòng: thấp/vừa/cao |
| **Ngày tháng (datetime)** | Thời gian | ngày mua hàng |

### Dữ liệu có cấu trúc vs phi cấu trúc

- **Có cấu trúc (structured):** dạng bảng gọn gàng (Excel, cơ sở dữ liệu). Phần lớn môn học làm với dữ liệu này.
- **Phi cấu trúc (unstructured):** văn bản, hình ảnh, âm thanh — cần xử lý thêm (chạm tới ở Tuần 13 – Text Mining).

> **Minh họa trực quan:** chiếu một bảng dữ liệu thật (ví dụ Titanic hoặc dữ liệu khách hàng). Chỉ vào một dòng ("đây là một hành khách"), một cột ("đây là giới tính"), và hỏi lớp *"đâu là biến ta muốn dự đoán?"* → dẫn sang khái niệm target.

---

## Phần 4 — Quy trình CRISP-DM (25 phút, phần lõi)

Đây là **xương sống của cả môn học**. Mọi kỹ thuật ở các tuần sau đều gắn vào một giai đoạn của khung này (North, Ch. 1).

### CRISP-DM là gì

**CRISP-DM** = *Cross-Industry Standard Process for Data Mining* — quy trình chuẩn, độc lập ngành, ra đời cuối thập niên 1990, được dùng rộng rãi nhất trong thực tế để tổ chức một dự án data mining. Nó gồm **6 giai đoạn** và có tính **lặp (cyclical)** — không phải đường thẳng một chiều.

### Sáu giai đoạn

1. **Business Understanding (Hiểu bài toán kinh doanh)**
   Xác định *mục tiêu kinh doanh* và chuyển thành *bài toán data mining*. Ví dụ: "giảm tỷ lệ khách rời bỏ" → "dự đoán khách nào có khả năng rời bỏ trong 3 tháng tới". *Mọi dự án bắt đầu từ đây, không phải từ thuật toán.*
   *(North gọi giai đoạn này là "Organizational Understanding".)*

2. **Data Understanding (Hiểu dữ liệu)**
   Thu thập dữ liệu, khám phá sơ bộ, kiểm tra chất lượng: có bao nhiêu dòng/cột, thiếu dữ liệu ở đâu, phân bố ra sao. Tương ứng phần "khám phá" trong bài tutorial Orange.

3. **Data Preparation (Chuẩn bị dữ liệu)**
   Làm sạch và biến đổi dữ liệu: xử lý giá trị thiếu, loại ngoại lệ, tạo biến mới, chuẩn hóa. **Chiếm 70–80% công sức của cả dự án.**

4. **Modeling (Xây dựng mô hình)**
   Áp dụng kỹ thuật (clustering, regression, decision tree...) để tìm quy luật hoặc tạo mô hình dự đoán.

5. **Evaluation (Đánh giá)**
   Kiểm định mô hình có tốt và đáng tin không (accuracy, cross-validation), và có *trả lời được câu hỏi kinh doanh ban đầu* không.

6. **Deployment (Triển khai)**
   Đưa kết quả vào thực tế: báo cáo cho lãnh đạo, tích hợp vào quy trình, hoặc viết business memo khuyến nghị hành động.

### Hai thông điệp then chốt (nhấn mạnh với sinh viên BA)

- **Phần lớn công việc nằm ở hiểu & chuẩn bị dữ liệu (giai đoạn 2–3), không phải ở mô hình.** Người mới hay tưởng data mining là "chọn thuật toán xịn" — thực tế ngược lại.
- **Dự án bắt đầu và kết thúc ở phía kinh doanh (giai đoạn 1 và 6).** Vai trò của nhà phân tích BA mạnh nhất chính ở hai đầu này: đặt đúng câu hỏi và diễn giải đúng kết quả.

> **Liên hệ chéo:** vẽ vòng tròn 6 giai đoạn lên bảng và chỉ ra tuần nào của môn ứng với giai đoạn nào (Tuần 3–4 ↔ Data Prep; Tuần 5–12 ↔ Modeling; Tuần 13 ↔ Evaluation).

---

## Phần 5 — Tổng quan công cụ + demo Orange (15 phút)

**Nội dung:**

- Giới thiệu ngắn về Orange: phần mềm kéo-thả, mỗi khối là một **widget**, nối các widget thành **workflow**.
- **Demo trực tiếp (chiếu màn hình):** chạy workflow Titanic từ bài *Tutorial_Orange_SampleProject* — nạp dữ liệu → xem bảng → một biểu đồ → một mô hình cho ra dự đoán. **Không dạy thao tác chi tiết**, chỉ để lớp thấy toàn cảnh.
- **Ánh xạ demo với CRISP-DM:** vừa demo vừa chỉ ra "bước này là Data Understanding, bước kia là Modeling..." để củng cố Phần 4.

> **Mục tiêu tâm lý:** để sinh viên thấy *"cả môn học sẽ trông như thế này"* và thấy nó không đáng sợ.

---

## Phần 6 — Tổng kết & giao việc (10 phút)

**Tóm tắt 3 ý chính:**
1. Data mining = tìm quy luật hữu ích trong dữ liệu để ra quyết định.
2. Dữ liệu tổ chức theo dòng (đối tượng) và cột (đặc điểm); có biến mục tiêu.
3. CRISP-DM gồm 6 giai đoạn, xoay quanh câu hỏi kinh doanh.

**Giao chuẩn bị cho Lab tuần 2:**
- **Cài Orange Data Mining** theo file *Install_Instruction* trước buổi sau (bắt buộc, mang laptop đã cài).
- Đọc **Chương 1** sách North.
- Tham gia kênh trao đổi của lớp.
- Xem trước: Lab 0 tuần 2 sẽ tạo workflow đầu tiên và làm thống kê mô tả.

---

## Phần 7 — Ôn tập nhanh pandas (10–15 phút)

> **Vì sao có phần này:** Môn học chủ yếu dùng Orange (kéo-thả), nhưng ở các lab sau các em sẽ gặp widget **Python Script** và các đoạn code Python mẫu. Sinh viên đã học sơ Python; phần này **ôn lại pandas** — thư viện xử lý dữ liệu dạng bảng — để các em đọc-hiểu và chỉnh sửa code tự tin hơn. Đây là ôn tập, không phải dạy mới.

### Liên hệ với khái niệm vừa học

Bảng dữ liệu (dòng × cột) mà ta nói ở Phần 3 chính là một **DataFrame** trong pandas. Mỗi cột là một **Series**. Hiểu điều này giúp các em thấy Orange và pandas chỉ là hai cách thao tác trên *cùng một* cấu trúc dữ liệu.

### 1. Nạp thư viện & đọc dữ liệu

```python
import pandas as pd

df = pd.read_csv("titanic.csv")   # đọc file CSV thành DataFrame
```

### 2. Xem nhanh dữ liệu (Data Understanding)

```python
df.head()        # 5 dòng đầu
df.shape         # (số dòng, số cột)
df.columns       # danh sách tên cột
df.info()        # kiểu dữ liệu & số giá trị không rỗng của từng cột
df.describe()    # thống kê mô tả cho cột số (mean, min, max, quartiles)
```

### 3. Chọn cột & dòng

```python
df["age"]                    # chọn một cột (trả về Series)
df[["age", "sex"]]           # chọn nhiều cột
df.loc[0]                    # dòng theo nhãn chỉ mục
df.iloc[0:5]                 # 5 dòng đầu theo vị trí
df.loc[df["sex"] == "female"]   # lọc dòng theo điều kiện
```

### 4. Xử lý giá trị thiếu (Data Preparation)

```python
df.isnull().sum()                       # đếm giá trị thiếu theo cột
df["age"].fillna(df["age"].mean())      # điền trung bình cho cột age
df.dropna()                             # bỏ các dòng có giá trị thiếu
```

### 5. Tóm tắt & nhóm (khám phá pattern)

```python
df["sex"].value_counts()                # đếm theo nhóm
df.groupby("sex")["survived"].mean()    # tỷ lệ sống sót theo giới tính
```

> Kết quả dòng cuối cho thấy nữ có tỷ lệ sống sót cao hơn — đúng quy luật ta sẽ thấy lại trong Orange. Đây là minh chứng: pandas và Orange dẫn tới **cùng một tri thức**, chỉ khác cách thao tác.

### Bảng đối chiếu pandas ↔ Orange ↔ CRISP-DM

| Thao tác | pandas | Orange (widget) | Giai đoạn CRISP-DM |
|----------|--------|-----------------|--------------------|
| Nạp dữ liệu | `pd.read_csv()` | File / Datasets | Data Understanding |
| Xem bảng | `df.head()` | Data Table | Data Understanding |
| Thống kê mô tả | `df.describe()` | Feature Statistics | Data Understanding |
| Lọc/chọn | `df.loc[...]` | Select Rows / Columns | Data Preparation |
| Điền thiếu | `df.fillna()` | Impute / Preprocess | Data Preparation |
| Nhóm & tóm tắt | `df.groupby()` | Group By / Pivot | Data Understanding |

### Tự kiểm tra nhanh (2–3 phút)

Cho DataFrame `df` của Titanic, viết một dòng lệnh cho mỗi yêu cầu:

1. Đếm số hành khách theo hạng vé (`pclass`).
2. Tính tuổi trung bình của hành khách nữ.
3. Đếm xem cột `age` thiếu bao nhiêu giá trị.

*(Gợi ý đáp án: `df["pclass"].value_counts()` · `df.loc[df["sex"]=="female", "age"].mean()` · `df["age"].isnull().sum()`)*

> **Nếu sinh viên thấy lạ lẫm với các lệnh trên:** không sao — môn học vẫn chạy được hoàn toàn bằng Orange. pandas chỉ là công cụ bổ trợ để *đọc-hiểu* code, không bắt buộc viết thành thạo.

---

## Thuật ngữ cần nhớ (Glossary)

| Thuật ngữ | Nghĩa |
|-----------|-------|
| Data mining | Khám phá quy luật hữu ích trong dữ liệu |
| CRISP-DM | Quy trình chuẩn 6 giai đoạn cho dự án data mining |
| Row / Instance | Một đối tượng quan sát (một dòng) |
| Attribute / Feature | Một đặc điểm (một cột) |
| Target / Label | Biến cần dự đoán |
| Structured data | Dữ liệu dạng bảng |
| Widget / Workflow | Khối chức năng / chuỗi khối trong Orange |
| DataFrame / Series | Bảng dữ liệu / một cột trong pandas |

---

## Câu hỏi thảo luận (dùng cho seminar hoặc discussion board)

1. Nêu một quyết định kinh doanh trong ngành em quan tâm mà data mining có thể hỗ trợ. Nó thuộc nhóm nào trong bốn nhóm bài toán?
2. Vì sao giai đoạn "Business Understanding" lại được đặt đầu tiên trong CRISP-DM? Điều gì xảy ra nếu bỏ qua nó?
3. Người ta nói 70–80% công sức của dự án nằm ở chuẩn bị dữ liệu. Theo em vì sao?

---

## Bài tập về nhà (chuẩn bị, không tính điểm)

- Cài đặt Orange thành công và mở thử một dataset mẫu bất kỳ (theo file Install_Instruction, phần kiểm tra bằng bộ *iris*).
- Viết 3–4 câu: chọn một sản phẩm/ứng dụng em dùng hằng ngày và mô tả nó có thể đang "khai thác dữ liệu" của em như thế nào.

---

## Tham chiếu

- North, M. (2012). *Data Mining for the Masses*. Global Text Project / Textbook Equity (Creative Commons). — **Chương 1: Introduction to Data Mining and CRISP-DM** (nội dung nền của buổi này); Chương 2 (Data Understanding) cho phần khái niệm dữ liệu.
  Bản PDF miễn phí: https://www.betterevaluation.org/sites/default/files/2023-05/DataMiningForTheMasses.pdf
- CRISP-DM: *Cross-Industry Standard Process for Data Mining* — khung quy trình chuẩn ngành (Chapman et al., 2000).
- Orange Data Mining — tài liệu & workflow mẫu: https://orangedatamining.com/docs
- Tài liệu môn học liên quan: `Syllabus_DataMining_BA.md`, `Install_Instruction.md`, `Tutorial_Orange_SampleProject.md` (cùng thư mục).

---

*Biên soạn cho môn IST 4520 – Data Mining (bản điều chỉnh cho ngành Business Analytics). Cập nhật: tháng 7/2026.*
