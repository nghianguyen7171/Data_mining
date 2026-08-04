# Bài thực hành mẫu: Dự án Data Mining đầu tiên với Orange

**Bộ dữ liệu:** Titanic — dự đoán hành khách sống sót
**Bài toán:** Phân loại (Classification)
**Thời lượng:** ~60–90 phút
**Mục tiêu:** Đi trọn một dự án data mining hoàn chỉnh theo quy trình **CRISP-DM**, làm quen thao tác kéo-thả trong Orange.

> **Vì sao chọn Titanic?** Đây là bộ dữ liệu nhập môn phổ biến nhất thế giới: nhỏ, dễ hiểu, mỗi dòng là một hành khách với các đặc điểm (giới tính, hạng vé, tuổi...) và nhãn *sống sót hay không*. Bài toán "ai có khả năng sống sót" giúp bạn hiểu ngay ý nghĩa của phân loại và của việc "mô hình học từ dữ liệu". Kỹ năng ở đây chuyển thẳng sang các bài toán kinh doanh như dự đoán **khách hàng rời bỏ (churn)** hay **khách hàng có mua hàng hay không**.

---

## Chúng ta sẽ xây dựng gì

Một workflow hoàn chỉnh gồm 4 giai đoạn:

```
[Nạp dữ liệu] → [Khám phá & trực quan hóa] → [Huấn luyện mô hình] → [Đánh giá & diễn giải]
```

Kết thúc bài, bạn sẽ có một mô hình dự đoán khả năng sống sót và biết mô hình đó chính xác đến mức nào.

---

## Giai đoạn 0 — Chuẩn bị dữ liệu

Có hai cách lấy dữ liệu Titanic. **Cách A khuyến nghị cho người mới** (không cần tải file, không lo đường dẫn).

### Cách A — Dùng widget "Datasets" có sẵn trong Orange (khuyến nghị)
1. Mở Orange, tạo workflow mới (**File → New**).
2. Từ thanh widget bên trái, kéo widget **Datasets** ra canvas.
3. Nhấp đúp vào **Datasets**, gõ "titanic" vào ô tìm kiếm, chọn bộ **Titanic** trong danh sách → Orange tự tải về.

### Cách B — Tự tải file CSV rồi nạp bằng widget "File"
1. Tải file CSV Titanic từ nguồn công khai phổ biến:
   `https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv`
   (Mở link → nhấn chuột phải → *Save as* → lưu `titanic.csv` vào máy.)
2. Trong Orange, kéo widget **File** ra canvas → nhấp đúp → **Browse** → chọn `titanic.csv`.
3. Kiểm tra ở bảng bên dưới: cột **Survived** cần có vai trò (role) là **target**. Nếu chưa, nhấp vào ô role của dòng `Survived` và đổi thành **target**. Cột như `Name`, `PassengerId`, `Ticket` nên đặt role **meta** hoặc **skip** (không dùng để học).

> Từ đây tài liệu dùng khối nguồn dữ liệu chung, gọi là **[Nguồn dữ liệu]** (chính là widget Datasets hoặc File bạn vừa tạo).

---

## Giai đoạn 1 — Hiểu dữ liệu (Data Understanding)

**Mục tiêu:** xem dữ liệu có gì trước khi mô hình hóa.

### Bước 1.1 — Xem bảng dữ liệu
1. Kéo widget **Data Table** ra canvas.
2. Nối **[Nguồn dữ liệu]** → **Data Table** (kéo từ vòng cung bên phải widget nguồn sang Data Table).
3. Nhấp đúp **Data Table**: xem từng dòng là một hành khách. Chú ý các cột: `status/pclass` (hạng vé), `sex` (giới tính), `age` (tuổi), và `survived` (nhãn cần dự đoán).

### Bước 1.2 — Thống kê từng biến
1. Kéo widget **Feature Statistics**, nối **[Nguồn dữ liệu]** → **Feature Statistics**.
2. Nhấp đúp để xem: giá trị trung bình, phân bố, và **tỷ lệ giá trị thiếu (missing)** của mỗi cột. Ghi nhớ cột nào thiếu nhiều (thường là `age`).

### Bước 1.3 — Trực quan hóa quan hệ với "sống sót"
1. Kéo widget **Distributions**, nối **[Nguồn dữ liệu]** → **Distributions**.
2. Nhấp đúp, chọn biến `sex`, và ở phần tô màu (split/color) chọn `survived`.
   → Bạn sẽ thấy rõ **nữ sống sót nhiều hơn nam** — một quy luật mô hình sẽ học được.
3. Thử lại với biến `pclass` (hạng vé): hạng 1 sống sót nhiều hơn hạng 3.

> **Ý nghĩa kinh doanh:** đây chính là bước "khám phá pattern" — tìm xem yếu tố nào liên quan đến kết quả, trước khi để máy học tự động.

---

## Giai đoạn 2 — Chuẩn bị dữ liệu (Data Preparation)

**Mục tiêu:** xử lý giá trị thiếu để mô hình học tốt hơn.

### Bước 2.1 — Điền giá trị thiếu
1. Kéo widget **Preprocess** (hoặc **Impute**) ra canvas.
2. Nối **[Nguồn dữ liệu]** → **Preprocess**.
3. Nhấp đúp, thêm phương pháp **Impute Missing Values** → chọn cách "Average/Most frequent" (điền trung bình cho số, giá trị phổ biến nhất cho phân loại).
   → Cột `age` bị thiếu sẽ được điền tự động.

> Với người mới có thể bỏ qua bước này lần đầu; nhưng nên làm để thấy tác dụng của tiền xử lý lên độ chính xác.

---

## Giai đoạn 3 — Xây dựng mô hình (Modeling)

**Mục tiêu:** huấn luyện các mô hình phân loại và so sánh chúng.

Chúng ta sẽ dùng **Test and Score** — widget trung tâm tự động chia dữ liệu train/test và chấm điểm mô hình.

### Bước 3.1 — Thêm các mô hình
Kéo ra canvas ba widget mô hình (chưa cần nối gì vội):
- **Tree** (Cây quyết định) — dễ diễn giải nhất.
- **Logistic Regression** — chuẩn mực cho bài toán có/không.
- **kNN** (k-Nearest Neighbors).

### Bước 3.2 — Nối vào Test and Score
1. Kéo widget **Test and Score** ra canvas.
2. Nối **dữ liệu** (đầu ra của **Preprocess**, hoặc **[Nguồn dữ liệu]** nếu bỏ qua tiền xử lý) → **Test and Score**.
3. Nối **cả ba mô hình** (Tree, Logistic Regression, kNN) → **Test and Score** (mỗi mô hình một đường nối).
4. Nhấp đúp **Test and Score**:
   - Ở phần **Sampling** chọn **Cross validation** (ví dụ 5 folds) — cách đánh giá đáng tin cậy, sẽ học kỹ ở Tuần 13.
   - Xem bảng kết quả: mỗi hàng là một mô hình với các chỉ số **AUC, CA (Accuracy), F1, Precision, Recall**.

> **Đọc kết quả:** CA (Classification Accuracy) = tỷ lệ dự đoán đúng. So sánh ba mô hình xem cái nào cao nhất. Với Titanic, Logistic Regression và Tree thường đạt CA khoảng 0.78–0.82.

---

## Giai đoạn 4 — Đánh giá & diễn giải (Evaluation)

### Bước 4.1 — Ma trận nhầm lẫn (Confusion Matrix)
1. Kéo widget **Confusion Matrix**, nối **Test and Score** → **Confusion Matrix**.
2. Nhấp đúp: xem bảng 2×2 cho biết mô hình dự đoán đúng/sai bao nhiêu ở mỗi nhóm (sống / không sống).
   - Ô đường chéo = dự đoán đúng. Ô ngoài đường chéo = sai.
   - Chọn mô hình tốt nhất ở menu bên trên để xem riêng.

### Bước 4.2 — Đường cong ROC
1. Kéo widget **ROC Analysis**, nối **Test and Score** → **ROC Analysis**.
2. Nhấp đúp: đường cong càng lồi lên góc trên-trái càng tốt. Đây là cách so sánh mô hình trực quan.

### Bước 4.3 — Xem cây quyết định (diễn giải)
1. Kéo widget **Tree Viewer**, nối **Tree** → **Tree Viewer**.
2. Nhấp đúp: xem sơ đồ cây — mô hình "quyết định" thế nào. Thường nhánh đầu tiên tách theo **giới tính**, khớp với điều bạn thấy ở Giai đoạn 1.

> **Ý nghĩa kinh doanh:** Tree Viewer cho bạn giải thích được *vì sao* mô hình dự đoán như vậy — cực kỳ quan trọng khi trình bày cho lãnh đạo, những người cần hiểu logic chứ không chỉ con số.

---

## Sơ đồ workflow hoàn chỉnh

```
                          ┌──→ Data Table
                          │
[Nguồn dữ liệu] ──────────┼──→ Feature Statistics
                          │
                          ├──→ Distributions
                          │
                          └──→ Preprocess ──→ Test and Score ──→ Confusion Matrix
                                                   ↑        └───→ ROC Analysis
                              Tree ────────────────┤
                              Logistic Regression ─┤
                              kNN ─────────────────┘

                              Tree ──→ Tree Viewer
```

---

## Diễn giải kết quả theo ngôn ngữ kinh doanh

Sau khi chạy xong, hãy tập viết một đoạn "business memo" ngắn — đây là kỹ năng được chấm điểm trong môn:

> *"Mô hình Logistic Regression dự đoán đúng khoảng 80% trường hợp. Hai yếu tố ảnh hưởng mạnh nhất đến khả năng sống sót là **giới tính** và **hạng vé**: nữ và hành khách hạng 1 có tỷ lệ sống sót cao hơn rõ rệt. Nếu đây là bài toán kinh doanh — ví dụ dự đoán khách hàng rời bỏ — ta sẽ diễn giải tương tự: xác định nhóm khách rủi ro cao và yếu tố dẫn đến rời bỏ, để ưu tiên nguồn lực giữ chân."*

---

## Bài tập mở rộng (tự làm)

1. **Bỏ bước Preprocess** rồi chạy lại Test and Score — độ chính xác thay đổi thế nào? (Thấy được giá trị của tiền xử lý.)
2. Thêm mô hình **Random Forest** và so sánh với ba mô hình cũ.
3. Trong **Tree**, chỉnh tham số độ sâu (max depth) và quan sát ảnh hưởng đến kết quả.
4. Dùng widget **Predictions** để xem mô hình dự đoán cho từng hành khách cụ thể.

---

## Đối chiếu với chương trình môn học

Bài thực hành này chạm tới nhiều tuần trong đề cương:
- **Tuần 1–4:** CRISP-DM, hiểu & chuẩn bị dữ liệu, trực quan hóa.
- **Tuần 9–10:** phân loại (Tree, kNN, Naive Bayes) và nền tảng đánh giá.
- **Tuần 11:** Logistic Regression.
- **Tuần 13:** Decision Trees và Cross-validation.

Vì vậy đây là bài "xem trước toàn cảnh" rất tốt trước khi đi sâu từng kỹ thuật.

---

*Biên soạn cho môn IST 4520 – Data Mining (bản điều chỉnh cho ngành Business Analytics). Công cụ: Orange Data Mining. Cập nhật: tháng 7/2026.*
