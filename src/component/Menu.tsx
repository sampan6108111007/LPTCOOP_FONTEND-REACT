import React from "react";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        <img
          src="dist/img/logo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">
          สหกรณ์ออมทรัพย์ครู ลำปาง
        </span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-header">ทำรายการ</li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-calendar-alt" />
                <p>
                  ใบสมัคร
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>สรุปข้อมูลการเป็นสมาชิกรายคน</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>ชำระเงิน</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>ดู/แก้ไข ข้อมูลทะเบียนสมาชิก</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>ดู/แก้ไข ข้อมูลสมาชิก ทั้งหมด</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>แจ้งลาออก/แจ้งตาย</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>ประมวลผลเรียกเก็บ</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-columns" />
                <p>ประมวณผลตัดยอด</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
