import React from 'react';
// import { connect } from 'react-redux'
import style from '../styles/sizeGuild.module.scss';
// import Navbar from '../components/navbar/navbar'
import Footer from "../components/footer/footer";
import Navbar from '../components/navbar/navbar';
import Bang1 from '../img/sizeGuild/Bang_1.png';
import Bang2 from '../img/sizeGuild/Bang_2.png';
import Bang3 from '../img/sizeGuild/Bang_3.png';
import Bang4 from '../img/sizeGuild/Bang_4.png';

export default function sizeGuild () {
  return (
    <>
    
        <Navbar />
        <div className={style.page}>
            <h1 className={style.title}>Hướng dẫn chọn kích cỡ quần áo</h1>
            <div className={style.note}>
                <div className={style.note_content}>Ghi chú</div>
                <div className={style.note_content} style={{top: 55, width: 245,fontSize: 15, fontStyle: 'italic', fontWeight: 200}}>
                    *Bảng chọn size mang tính chất tham khảo, thực tế có thể sai số 1-2cm
                </div>
            </div>
            <img src={Bang1} alt="Table 1" className={style.table}></img>
            <img src={Bang2} alt="Table 2" className={style.table} style={{top: 550}}></img>
            <img src={Bang3} alt="Table 3" className={style.table} style={{top: 900}}></img>
            <img src={Bang4} alt="Table 4" className={style.table} style={{top: 1250}}></img>

        
        </div>
        <Footer />
    </>
  );
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(sizeGuild)