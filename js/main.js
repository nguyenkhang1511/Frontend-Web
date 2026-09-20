// Render danh sách đề tài
function renderDeTai() {
    const tbody = document.getElementById("ds-detai-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    mockDeTai.forEach((dt) => {
        const isAvailable = dt.trangThai === "Mở đăng ký";
        const badgeClass = isAvailable ? "available" : "locked";
        const btnDisabled = isAvailable ? "" : "disabled";

        tbody.innerHTML += `
            <tr>
                <td><strong>${dt.ma}</strong></td>
                <td>${dt.ten}</td>
                <td>${dt.boMon}</td>
                <td>${dt.gvhd}</td>
                <td>Tối đa ${dt.maxSV} SV</td>
                <td><span class="status-badge ${badgeClass}">${dt.trangThai}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary" ${btnDisabled} onclick="dangKy('${dt.ma}')">
                        Đăng ký
                    </button>
                </td>
            </tr>
        `;
    });
}

function dangKy(maDT) {
    alert("Đã gửi yêu cầu đăng ký đề tài thành công: " + maDT);
}

// Hàm xử lý Form Tạo Nhóm
function xuLyTaoNhom(event) {
    event.preventDefault();
    const sv2 = document.getElementById("sv2").value;
    const sv3 = document.getElementById("sv3").value;

    if (!sv2) {
        alert("Vui lòng nhập MSSV của thành viên thứ 2!");
        return;
    }

    alert(`Tạo nhóm thành công! Danh sách thành viên:\n- 20120001 (Nhóm trưởng)\n- ${sv2}\n${sv3 ? '- ' + sv3 : ''}`);
}

// Hàm xử lý Form Nộp Báo Cáo
function xuLyNopBaoCao(event) {
    event.preventDefault();
    const fileInput = document.getElementById("fileBaoCao");
    
    if (fileInput.files.length === 0) {
        alert("Vui lòng chọn file báo cáo trước khi gửi!");
        return;
    }

    const fileName = fileInput.files[0].name;
    alert(`Nộp báo cáo thành công!\nFile đã tải lên: ${fileName}`);
}

// Khởi chạy khi trang tải xong
document.addEventListener("DOMContentLoaded", renderDeTai);