/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import { Container, Row, Col, Table, Form, Button, Popover, OverlayTrigger, ButtonToolbar, ListGroup, Modal } from 'react-bootstrap'

export function AdvanceTablesWidget4({ className }) {
  const [show2, setShow2] = useState(false);
  const [dataMou, setDatamou] = useState([
    // {
    //   "no": "1",
    //   "mitra": "Forum Sekolah Sepakbola Indonesia (FOSSBI) Pusat",
    //   "unitKerja": "Asdep Ordik",
    //   "bidangKerjasama": "Olahraga",
    //   "namaPerjanjian": "Mou Liga Berjenjang U-12",
    //   "tempatPenandatanganan": "Gd. PPITKON Lt. 2 Kemenpora",
    //   "tanggalPenandatanganan": "8 Juli 2019",
    //   "statusPerjanjian": "8 Juli - 31 Desember 2019 Cara Pengakhiran : Memberikan Laporan Pertanggungjawaban Keuangan dan Kegiatan",
    //   "bidangImplementasi": "Olahraga",
    //   "jenisImplementasi": "Penyelenggaraan Liga Berjenjang U-12",
    //   "keterangan": "PKS sudah tidak berlaku ",
    //   "namaDokumen": ""
    // },
    // {
    //   "no": "2",
    //   "mitra": "Badan Liga Sepakbola Pelajar Indonesia (BLISPI)",
    //   "unitKerja": "Asdep Ordik",
    //   "bidangKerjasama": "Olahraga",
    //   "namaPerjanjian": "Mou Liga Berjenjang U-14",
    //   "tempatPenandatanganan": "Gd. PPITKON Lt. 2 Kemenpora",
    //   "tanggalPenandatanganan": "8 Juli 2019",
    //   "statusPerjanjian": "8 Juli - 31 Desember 2019 Cara Pengakhiran : Memberikan Laporan Pertanggungjawaban Keuangan dan Kegiatan",
    //   "bidangImplementasi": "Olahraga",
    //   "jenisImplementasi": "Penyelenggaraan Liga Berjenjang U-14",
    //   "keterangan": "PKS sudah tidak berlaku",
    //   "namaDokumen": ""
    // },
    // {
    //   "no": "3",
    //   "mitra": "Manajemen Kompetisi (MK)",
    //   "unitKerja": "Asdep Ordik",
    //   "bidangKerjasama": "Olahraga",
    //   "namaPerjanjian": "Mou Liga Berjenjang U-16",
    //   "tempatPenandatanganan": "Gd. PPITKON Lt. 2 Kemenpora",
    //   "tanggalPenandatanganan": "8 Juli 2019",
    //   "statusPerjanjian": "8 Juli - 31 Desember 2019 Cara Pengakhiran : Memberikan Laporan Pertanggungjawaban Keuangan dan Kegiatan",
    //   "bidangImplementasi": "Olahraga",
    //   "jenisImplementasi": "Penyelenggaraan Liga Berjenjang U-16",
    //   "keterangan": "PKS sudah tidak berlaku",
    //   "namaDokumen": ""
    // },
    {
      "no": "4",
      "mitra": "UNIVERSITAS SRIWIJAYA",
      "unitKerja": "Sekertaris Mentri",
      "bidangKerjasama": "Olahraga",
      "namaPerjanjian": "INTEGRASI PROGRAM POLITEKNIK OLAHRAGA INDONESIA",
      "tempatPenandatanganan": "Gd. PPITKON Lt. 2 Kemenpora",
      "tanggalPenandatanganan": "8 Juli 2019",
      "statusPerjanjian": "8 Juli - 31 Desember 2019 Cara Pengakhiran : Memberikan Laporan Pertanggungjawaban Keuangan dan Kegiatan",
      "bidangImplementasi": "Program Olahraga",
      "jenisImplementasi": "INTEGRASI PROGRAM POLITEKNIK OLAHRAGA INDONESIA",
      "keterangan": "PKS sudah tidak berlaku",
      "namaDokumen": "PKS Kemenpora Unsri"
    }
  ])

  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">Rekapitulasi Hasil Kerjasama</span>
          {/* <span className="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span> */}
        </h3>
        <div className="card-toolbar">
          {/* <a href="#" className="btn btn-info font-weight-bolder font-size-sm mr-3">Buat PKS</a> */}
          {/* <a href="#" className="btn btn-danger font-weight-bolder font-size-sm">Create</a> */}
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-0 pb-3">
        <div className="tab-content">
          <div className="table-responsive">
            <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
              <thead>
                <tr className="text-left text-uppercase">
                  {/* <th className="pl-7" style={{minWidth: "250px"}}><span className="text-dark-75">Nama Mitra</span></th>
                  <th style={{minWidth: "100px"}}>Judul PKS</th>
                  <th style={{minWidth: "100px"}}>Periode Masa Berlaku</th>
                  <th style={{minWidth: "130px"}}>Lingkup Kegiatan</th>
                  <th style={{minWidth: "100px"}}>Nilai Kontrak</th>
                  <th style={{minWidth: "130px"}}>Nilai Yang Diperlukan</th>
                  <th style={{minWidth: "130px"}}>Nama Unit</th>
                  <th style={{minWidth: "130px"}}>Hasil</th>
                  <th style={{minWidth: "80px"}}/> */}
                  <th>#</th>
                  <th>Nama Mitra</th>
                  <th>Unit Kerja</th>
                  <th>Bidang Kerjasama</th>
                  <th>Nama Perjanjian</th>
                  <th>Tempat Penandatanganan</th>
                  <th>Tanggal Penandatanganan</th>
                  {/* <th>Nilai Yang Sudah Digunakan (Rp)</th> */}
                  <th>Status Perjanjian</th>
                  <th>Bidang Implementasi</th>
                  <th>Jenis Implementasi</th>
                  <th>Output</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataMou.map((value, index) => (
                    <tr key={index}>
                      <td>{value.no}</td>
                      <td>{value.mitra}</td>
                      <td>{value.unitKerja}</td>
                      <td>{value.bidangKerjasama}</td>
                      <td>{value.namaPerjanjian}</td>
                      <td>{value.tempatPenandatanganan}</td>
                      <td>{value.tanggalPenandatanganan}</td>
                      <td>{value.statusPerjanjian}</td>
                      <td>{value.bidangImplementasi}</td>
                      <td>{value.jenisImplementasi}</td>
                      {/* <td>{value.keterangan}</td> */}
                      <td><a href="#">{value.namaDokumen}</a></td>
                    </tr>
                  ))
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
