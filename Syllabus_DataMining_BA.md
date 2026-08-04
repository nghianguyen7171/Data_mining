# IST 4520 – Data Mining

## Đề cương môn học (điều chỉnh cho sinh viên ngành Business Analytics)

**Trường:** National Economic University (NEU)
**Thời lượng:** 15 tuần
**Hình thức:** Lecture – Seminar (xen kẽ: một tuần lý thuyết, một tuần thực hành/seminar)
**Đối tượng:** Sinh viên ngành Business Analytics (BA), không yêu cầu nền tảng lập trình

---

## 1. Mô tả môn học

Môn học trang bị cho sinh viên tư duy phân tích kinh doanh (business-analytic thinking) cần thiết để thành công trong nền kinh tế dựa trên dữ liệu. Sinh viên được giới thiệu các nền tảng của quản lý dữ liệu và phân tích kinh doanh, cùng những kỹ thuật cốt lõi: khám phá và trực quan hóa dữ liệu (data exploration & visualization), phát hiện quy luật (pattern discovery), mô hình dự báo (predictive modeling) và dự đoán (forecasting).

Điểm điều chỉnh so với đề cương gốc: môn học được thiết kế lại cho sinh viên **phi kỹ thuật**. Trọng tâm chuyển từ lập trình sang **hiểu quy trình, chọn đúng kỹ thuật cho đúng bài toán, và diễn giải kết quả để hỗ trợ ra quyết định**. Công cụ chính là phần mềm kéo-thả trực quan (no-code), code Python chỉ ở mức đọc-hiểu và tinh chỉnh.

---

## 2. Mục tiêu học tập (Student Learning Objectives)

Sau khi hoàn thành môn học, sinh viên có thể:

1. Dùng phân tích kinh doanh để đặt vấn đề, giải quyết vấn đề và hỗ trợ ra quyết định quản lý.
2. Mô tả dữ liệu bằng thống kê mô tả và các kỹ thuật trực quan hóa.
3. Hiểu một loạt kỹ thuật định lượng và thống kê áp dụng cho nhiều tình huống kinh doanh.
4. Sử dụng phần mềm phân tích dữ liệu để thực hiện các phân tích thiết yếu và thực tiễn cho tổ chức.
5. Giải thích các khía cạnh lý thuyết và thực hành cơ bản của phân tích dữ liệu.
6. Nhận diện các thành phần cơ bản của phân tích dữ liệu và vai trò của tiền xử lý, kỹ thuật phân tích, phân loại và dự báo.
7. Chuẩn bị và phân tích nhiều bộ dữ liệu khác nhau cho các mục đích cụ thể.
8. Xác định kỹ thuật phân tích nào phù hợp nhất với vấn đề nào của tổ chức.

---

## 3. Phần mềm

Môn học sử dụng bộ công cụ **miễn phí, đa nền tảng (Windows / macOS / Linux)**, phù hợp cho sinh viên phi kỹ thuật.

| Công cụ                                                | Vai trò         | Ghi chú                                                                                                                                                                   |
| -------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Orange Data Mining**                             | Công cụ chính | Mã nguồn mở, miễn phí, giao diện kéo-thả trực quan (no-code). Bản standalone đã đóng gói sẵn Python và các thư viện phổ biến (pandas, scikit-learn). |
| **Python** (qua widget Python Script trong Orange) | Bổ trợ         | Chỉ ở mức đọc-hiểu và chỉnh tham số; sinh viên không phải viết code từ đầu.                                                                                |
| **Excel / Google Sheets**                          | Nhập môn       | Dùng cho thống kê mô tả, correlation và trực quan hóa cơ bản ở giai đoạn đầu.                                                                               |

**Lý do chọn Orange + Python:** So với RapidMiner (nay là Altair AI Studio — bản Mac kém ổn định, bản free giới hạn 10.000 dòng), Orange nhẹ, ổn định trên mọi hệ điều hành, đường học thoải hơn và vẫn bao phủ đủ toàn bộ kỹ thuật trong môn. Việc bỏ R giúp sinh viên chỉ phải làm quen một ngôn ngữ (Python), tránh quá tải.

**Cài đặt:** Tải bản standalone installer tại [orangedatamining.com](https://orangedatamining.com). Không cần cài Python riêng.

---

## 4. Giáo trình & tài liệu

**Sách chính (miễn phí, hợp pháp):**

- *Data Mining for the Masses* — Dr. Matthew North. Phát hành theo giấy phép Creative Commons.
  - PDF trực tiếp: https://www.betterevaluation.org/sites/default/files/2023-05/DataMiningForTheMasses.pdf
  - Textbook Equity (Open Education): https://www.textbookequity.org/§-north-data-mining-for-the-masses-2012/
  - Cấu trúc chương khớp gần 1:1 với lịch học. Sinh viên bỏ qua các bước thao tác RapidMiner trong sách và thay bằng workflow Orange tương ứng do giảng viên cung cấp; phần lý thuyết và ví dụ kinh doanh giữ nguyên.

**Tài nguyên thực hành:**

- **Bộ dữ liệu + code Python mẫu** từ trang đồng hành của *Data Mining for Business Analytics in Python* (Shmueli et al.): [dataminingbook.com](https://www.dataminingbook.com) — tải miễn phí 20+ datasets, dùng cho bài lab.
- **Tutorial chính thức của Orange** (video + workflow mẫu) tại orangedatamining.com — nguồn hướng dẫn hands-on khớp đúng phần mềm.

**Tham khảo nâng cao (tùy chọn, sách thương mại):**

- *Data Mining for Business Analytics: Concepts, Techniques and Applications in Python* — Shmueli, Bruce, Gedeck, Patel (Wiley). Dành cho sinh viên muốn đào sâu phần Python; thường có sẵn qua truy cập thư viện trường.

---

## 5. Cấu trúc & yêu cầu môn học

Môn học theo mô hình **Lecture – Seminar xen kẽ**. Mỗi buổi kéo dài **90 phút**, đủ dung lượng để đi sâu một cụm chủ đề trọn vẹn.

- **Tuần Lecture (lý thuyết, 90 phút):** giới thiệu khái niệm, trực giác đằng sau kỹ thuật, và tình huống kinh doanh áp dụng. Bố cục gợi ý: ~10' mở đầu/ôn bài → ~50' nội dung chính (chia 2–3 tiểu chủ đề) → ~20' ví dụ minh họa (worked example / demo Orange) → ~10' thảo luận & tổng kết. Slide đăng trước cuối tuần; sinh viên đọc slide và chương sách tương ứng trước buổi học.
- **Tuần Seminar (thực hành/lab, 90 phút):** bố cục gợi ý: ~30' hướng dẫn hands-on trên Orange/Python theo từng bước → ~40' sinh viên tự làm bài lab có chấm điểm → ~15' thảo luận current-event / câu hỏi tuần → ~5' chốt & giao bài. Các hoạt động discussion và presentation được lồng vào tuần seminar, không cần buổi riêng.

Vì mỗi buổi tới 90 phút, nội dung từng tuần được thiết kế **theo cụm chủ đề đủ dày** (nhiều tiểu mục + ví dụ + thực hành) thay vì một khái niệm đơn lẻ — xem chi tiết ở mục 6.

**Cấu trúc thi (2 midterm: 1 paper / 1 project):**

- **Midterm gồm 2 bài:**
  - **Bài 1 — thi thực hành (paper), Tuần 8:** làm trực tiếp trên Orange (nạp dữ liệu → tiền xử lý → mô hình → diễn giải), bao phủ Tuần 1–7.
  - **Bài 2 — dự án nhóm & thuyết trình, Tuần 14:** nhóm thực hiện một dự án data mining trên bộ dữ liệu tự chọn và trình bày.
- **Final (Tuần 15):** thi viết / paper test — lý thuyết và vận dụng, bao phủ toàn bộ môn học.

**Sản phẩm học tập chính:**

- Bài lab Orange hằng tuần, mỗi bài kèm một **business memo** ngắn diễn giải kết quả theo ngôn ngữ kinh doanh.
- Một **bài tập Excel** về data mining ở giai đoạn đầu.
- Hai **bài trình bày current-event** (mỗi bài ~1–2 phút + tóm tắt 1–2 trang, có trích dẫn nguồn): một trước midterm, một sau midterm.
- **Midterm** gồm bài thi thực hành (Tuần 8) và dự án nhóm + thuyết trình (Tuần 14); **Final** là bài thi viết (Tuần 15).

---

## 6. Lịch học 15 tuần

**T = Lecture (lý thuyết) · S = Seminar (thực hành/lab) · E = Exam.** Mỗi buổi 90 phút.

| Tuần |    Loại    | Nội dung chi tiết (90 phút)                                                                                                                                                                                                                | Đọc trước / Bài nộp                                            |
| ----- | :---------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1     |    T + S    | **Nhập môn & CRISP-DM + Lab 0:** (1) giới thiệu môn & cách vận hành; (2) data mining là gì + 4 nhóm bài toán; (3) khái niệm dữ liệu; (4) quy trình **CRISP-DM** 6 giai đoạn; (5) **Lab 0** — thiết lập môi trường (VS Code / Google Colab), cài Orange, demo khám phá dữ liệu kinh tế HDI | North Ch. 1; `lab0.md`                                              |
| 2     |      S      | **Lab 1 — Giới thiệu Python:** khái niệm lập trình cơ bản; **biến & kiểu biến** (số, chuỗi, boolean, list); **hàm (function)**; điều kiện & vòng lặp đơn giản; thực hành viết và chạy code (VS Code / Colab)                | `lab1.md`                                                          |
| 3     |      T      | **Hiểu & chuẩn bị dữ liệu:** kiểu dữ liệu & vai trò biến (target/feature/meta); **data warehouse / mart / lake**; chất lượng dữ liệu & missing values; outliers; chuẩn hóa & tạo biến mới                     | North Ch. 2–3                                                       |
| 4     |      S      | **Lab — Giới thiệu pandas + làm sạch dữ liệu:** bài giảng ngắn về **pandas** (DataFrame, đọc dữ liệu, chọn/lọc, thống kê, xử lý missing) kèm thực hành; sau đó làm sạch & trực quan hóa dữ liệu trong Orange (Impute, Distributions, Scatter Plot, Box Plot)                                                                                          | Nộp **Excel Data Mining exercise**                             |
| 5     |      T      | **Tìm mối liên hệ:** correlation (hệ số Pearson) & cách đọc; **Association Rules** (support, confidence, lift); ứng dụng market-basket / gợi ý sản phẩm                                                            | North Ch. 4–5                                                       |
| 6     |      S      | **Lab:** correlation matrix + market-basket analysis trong Orange; business memo; thảo luận current-event                                                                                                                             | **Presentation #1**                                            |
| 7     |      T      | **Phân nhóm:** **k-Means Clustering**; cách chọn số cụm (k) & Silhouette; ứng dụng phân khúc khách hàng; **ôn tập giữa kỳ** (hệ thống Tuần 1–7)                                                         | North Ch. 6                                                          |
| 8     | **E** | **MIDTERM (bài 1) — thi thực hành / paper (90 phút):** làm trực tiếp trên Orange: nạp dữ liệu → tiền xử lý → dựng mô hình → diễn giải kết quả. Bao phủ Tuần 1–7.                                                             | **Thi thực hành**                                            |
| 9     |      T      | **Phân loại I:** **KNN + Naive Bayes**; chia train/test; **ma trận nhầm lẫn**; các chỉ số accuracy / precision / recall / F1                                                                                        | North Ch. 7                                                          |
| 10    |      S      | **Lab:** classification trong Orange (Test & Score, Confusion Matrix, ROC); so sánh nhiều mô hình; business memo                                                                                                                    | Nộp**business memo**                                          |
| 11    |      T      | **Dự báo:** **Linear Regression**; **Logistic Regression** cho bài toán có/không; cách đọc & diễn giải hệ số theo ngôn ngữ kinh doanh                                                                        | North Ch. 8–9                                                       |
| 12    |      S      | **Lab:** regression trong Orange/Python; đọc-hiểu & chỉnh tham số code Python; **giao đề dự án nhóm**                                                                                                                   | Chốt nhóm & đề tài                                              |
| 13    |      T      | **Nâng cao (tổng quan):** **Decision Trees** & Tree Viewer; **Neural Networks**; **Text Mining / NLP**; **Cross-validation** & đánh giá mô hình đáng tin                                               | North Ch. 10–13                                                     |
| 14    |  S / **E**  | **MIDTERM (bài 2) — Thuyết trình dự án nhóm**; **Presentation #2**; tổng kết môn học & **ôn thi cuối kỳ**                                                                                                                         | Nộp **dự án nhóm** trước buổi; **Presentation #2** |
| 15    | **E** | **FINAL — thi viết / paper test (90 phút):** lý thuyết & vận dụng (chọn kỹ thuật cho bài toán, đọc kết quả, CRISP-DM). Bao phủ toàn môn.                                                                             | **Thi viết**                                                  |

*Lịch có thể được giảng viên điều chỉnh khi cần; sinh viên sẽ được thông báo.*

---

## 7. Chính sách lớp học & thang điểm

### Cơ cấu điểm (2 midterm: 1 paper / 1 project)

| Thành phần | Trọng số | Chi tiết đánh giá |
|------------|:--------:|-------------------|
| **Attendance & Participation** | **10%** | Điểm danh ngẫu nhiên; tham gia tích cực (phát biểu, làm bài trên bảng). |
| **Midterm Exam** | **40%** | Gồm 2 bài: **(1)** bài thi thực hành / paper (Tuần 8) và **(2)** dự án nhóm + thuyết trình (Tuần 14). |
| **Final Exam** | **50%** | Bài thi cuối kỳ (thi viết / paper test, Tuần 15). |
| **TỔNG** | **100%** | |

### Chính sách điểm danh & tham gia (chi tiết)

| Quy định | Mô tả |
|----------|-------|
| **Điểm nền điểm danh** | Sinh viên đi học đầy đủ nhưng **không tham gia tích cực** nhận tối đa **8.0/10** cho thành phần này. |
| **Điểm thưởng tham gia** | Mỗi lần tham gia tích cực (trả lời câu hỏi, làm bài trên bảng) cộng **+0.25 điểm** vào điểm điểm danh. |
| **Phạt vắng & cấm thi** | Có điểm danh ngẫu nhiên. Nếu vắng **quá 4 buổi**, điểm điểm danh về **0** và **KHÔNG đủ điều kiện dự thi Final Exam**. |
| **Chuyển điểm dư** | Điểm điểm danh tối đa ghi nhận là **10.0**. Nếu tổng điểm vượt 10.0, phần **dư được chia đôi (50%)** và cộng thẳng vào **điểm Midterm Exam**. |
| **Ví dụ tính điểm** | Sinh viên đi học đủ (8.0đ) và tham gia 10 lần (10 × 0.25 = 2.5đ) → tổng thô = 10.5đ → điểm điểm danh = 10.0 (trần) → phần dư 0.5 được chia đôi (0.25) và cộng vào điểm Midterm. |

### Các quy định khác

**Nộp muộn:** Bài giao trong tuần lecture thường đến hạn vào tuần kế tiếp. Có ân hạn hai tuần, mỗi tuần trễ bị trừ 25%. Không nhận bài sau thời gian ân hạn.

**Thiết bị điện tử:** Trong buổi lý thuyết, tắt điện thoại và không dùng thiết bị gây xao nhãng trừ khi được phép. Trong buổi seminar/lab, laptop là công cụ bắt buộc cho thực hành.

**Kiểm tra:** Trong giờ kiểm tra chỉ được để tài liệu được phép trên bàn. Cấm dùng điện thoại; chụp ảnh đề thi sẽ bị xử lý kỷ luật. Rời phòng trong giờ kiểm tra đồng nghĩa nộp bài.

**Đạo văn & gian lận:** Sinh viên phải nắm rõ chính sách của trường. Gian lận hoặc đạo văn (trình bày công trình của người khác như của mình, hoặc dùng ý tưởng của người khác mà không ghi nguồn) dẫn đến điểm liệt và bị nhà trường xử lý.

**Ứng xử:** Mỗi sinh viên có trách nhiệm không cản trở quyền học tập của người khác.

**Thay đổi đề cương:** Giảng viên có thể điều chỉnh nội dung hoặc lịch để phù hợp hơn với nhu cầu học tập của lớp; sinh viên sẽ được thông báo.

---

## 8. Bản đồ ánh xạ (tham chiếu triển khai)

| Cụm chủ đề | Kỹ thuật                                       | Chương North | Bài toán kinh doanh minh họa                 |
| -------------- | ------------------------------------------------ | -------------- | ----------------------------------------------- |
| Nền tảng     | CRISP-DM, chuẩn bị & trực quan hóa dữ liệu | 1–3           | Hiểu & làm sạch dữ liệu khách hàng       |
| Mối liên hệ | Correlation, Association Rules                   | 4–5           | Market-basket / gợi ý sản phẩm              |
| Phân nhóm    | k-Means Clustering                               | 6              | Phân khúc khách hàng                        |
| Phân loại    | KNN, Naive Bayes                                 | 7              | Dự đoán khách hàng rời bỏ (churn)        |
| Dự báo       | Linear & Logistic Regression                     | 8–9           | Dự báo doanh số / xác suất mua             |
| Nâng cao      | Decision Trees, Neural Networks, Text Mining     | 10–13         | Chấm điểm tín dụng, phân tích phản hồi |
| Đánh giá    | Cross-validation, train/test                     | 13             | Kiểm định độ tin cậy mô hình            |

---

*Đề cương rà soát lần cuối: tháng 7/2026. Phiên bản điều chỉnh cho ngành Business Analytics — công cụ Orange + Python, hình thức Lecture–Seminar.*
