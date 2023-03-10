import React from "react";

import Badge from "../components/badge/Badge";
import './Pages.css'

const ContentInfo = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h2 className="tag-span">Content Details:</h2>
                        </div>
                        <div className="card__body card__body-p">
                            <p className="text-bold">Content ID: <span className="text-bold tag-span">Y0024</span></p>
                            <div style={{display: "flex"}}><p style={{padding: "5px 0", marginBottom: "0", marginRight: "5px"}} className="text-bold">Type: </p><Badge className="text-bold" type={"danger"} clickable={"none"} content={"Youtube video"}/></div>
                            <p className="text-bold">Content Name: <span className="text-bold tag-span">Tổng thống Ukraine nói Nga đang chuẩn bị cho việc sử dụng vũ khí hạt nhân - BBC News Tiếng Việt</span></p>
                            <p className="text-bold">URL: <span className="text-bold tag-span"><a href="https://www.youtube.com/watch?v=K4fGcCJjvkw">https://www.youtube.com/watch?v=K4fGcCJjvkw</a></span></p>
                            <div style={{display: "flex"}}><p style={{padding: "5px 0", marginRight: "5px"}} className="text-bold">Tags: </p><Badge className="text-bold mr-0-5" type={"main"} content={"Ukraine"}/><Badge className="text-bold" type={"main"} content={"Nga"}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header tag-span">
                            <p style={{"fontSize":"20px"}}>Video:</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}} className="card__body">
                            <iframe width="942" height="530" src="https://www.youtube.com/embed/K4fGcCJjvkw" title="Tổng thống Ukraine nói Nga đang chuẩn bị cho việc sử dụng vũ khí hạt nhân - BBC News Tiếng Việt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header tag-span">
                            <p style={{"fontSize":"20px"}}>Scanned Contents:</p>
                        </div>
                        <div className="card__body">
                            <p className="text-content">
                                Trung ương Đảng Cộng sản Việt Nam ngày 17/1  cho <span style={{  "color": "red","backgroundColor": "yellow"}}>Chủ tịch Nguyễn Xuân Phúc </span>  từ chức giữa   lúc cơ quan quyền lực nhất đất nước tiến  hành một cuộc càn quét chống tham nhũng,   trong đó có vụ liên quan đến công tác điều hành ứng phó với đại dịch COVID-19. Các nhà quan sát nhận định với VOA đây là vụ bãi chức chưa có tiền lệ   trong chính trường Việt Nam nhưng được đa số người dân đồng tình. <span style={{  "color": "red","backgroundColor": "yellow"}}>Truyền thông nhà nước</span> cho hay Bộ Chính trị và Ban Chấp hành Trung ương Đảng đồng ý với “nguyện   vọng cá nhân” của ông Phúc, bao gồm “nguyện vọng thôi giữ các chức vụ, nghỉ công tác và nghỉ hưu”.  Đơn từ chức này được chấp nhận tại một cuộc họp bất thường của Ban chấp hành   Trung ương hôm 17/1. Việc từ chức của ông với tư cách là người đứng đầu nhà nước dự   kiến ​​sẽ được bỏ phiếu tại một phiên họp bất thường của Quốc hội vào thứ Tư 18/1. Cựu nhà báo Võ Văn Tạo ở Khánh Hóa nhận định : “Đột nhiên ông Nguyễn Xuân Phúc được ‘thôi chức’,   thực chất đó là sự phế truất… nói nôm na đó là  sự bãi chức. Đó là một sự đặc ân của giới chóp bu của Đảng Cộng sản Việt Nam khi anh phạm sai  lầm, mắc khuyết điểm và thậm chí khi có tội,nhưng vì cương vị, vai vế của anh trong đảng rất  lớn, chẳng hạn như tứ trụ triều đình hay bộ chính trị, cho nên khi người ta xử lý anh, người làm một cách nhẹ nhàng hơn để giữ bộ mặt cho đảng thôi”. Việc ông Nguyễn Xuân Phúc bị đảng phế chức hôm 17/1 diễn ra sau các   nghi ngờ trước đó về việc ông đang bị thanh trừng do các sai phạm của   gia đình ông trong đại dịch. Các nguồn tin trong và ngoài nước trước đó biết   rằng ông Phúc bị Bộ Chính trị cho thôi các chức vụ tại một cuộc họp bí mật hôm 13/1. Ông Phúc, 68 tuổi, giữ chức thủ tướng chính phủ từ năm 2016-2021,   nắm giữ chức vụ chủ tịch nước phần lớn mang tính nghi thức trong vòng chưa đầy   hai năm và là quan chức cấp cao nhất bị đảng truy quét về cáo buộc tham nhũng. “Ông chịu trách nhiệm chính trị của người đứng đầu khi để nhiều cán bộ, trong đó có hai Phó thủ tướng, ba bộ trưởng có vi phạm, khuyết điểm,   gây hậu quả rất nghiêm trọng”, theo VNExpress dẫn thông báo của Ban chấp hành Trung ương. Vừa qua hai phó thủ tướng trong nội các thời ông Phúc đã từ chức, trong khi hai bộ trưởng và một   số quan chức khác đang phải đối mặt với cáo buộc hình sự do liên quan đến các “chuyến bay   giải cứu” đưa người Việt từ nước ngoài về các khu cách ly trong nước, và vụ test kit Việt Á.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentInfo;
