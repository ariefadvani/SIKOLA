/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";

export function AdvanceTablesWidget4({ className }) {
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
                  <th className="pl-7" style={{minWidth: "250px"}}><span className="text-dark-75">Nama Mitra</span></th>
                  <th style={{minWidth: "100px"}}>Judul PKS</th>
                  {/* <th style={{minWidth: "100px"}}></th> */}
                  <th style={{minWidth: "100px"}}>Periode Masa Berlaku</th>
                  <th style={{minWidth: "130px"}}>Lingkup Kegiatan</th>
                  {/* <th style={{minWidth: "100px"}}></th> */}
                  <th style={{minWidth: "100px"}}>Nilai Kontrak</th>
                  <th style={{minWidth: "130px"}}>Nilai Yang Diperlukan</th>
                  <th style={{minWidth: "130px"}}>Nama Unit</th>
                  <th style={{minWidth: "130px"}}>Hasil</th>
                  {/* <th style={{minWidth: "100px"}}></th> */}
                  <th style={{minWidth: "80px"}}/>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                          <span className="symbol-label">
                            <span className="svg-icon h-75 align-self-end">
                              <SVG src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}/>
                            </span>
                          </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">KONI PUSAT</a>
                        {/* <span className="text-muted font-weight-bold d-block">Partner</span> */}
                      </div>
                    </div>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Perjanjian Kerjasama Olahraga
                      </span>
                    {/* <span className="text-muted font-weight-bold">
                        In Proccess
                      </span> */}
                  </td>
                  {/* <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $8,000,000
                      </span>
                    <span className="text-muted font-weight-bold">
                        In Proccess
                      </span>
                  </td> */}
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        2020 - 2021
                      </span>
                    {/* <span className="text-muted font-weight-bold">
                        Paid
                      </span> */}
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Kerjasama A
                      </span>
                    {/* <span className="text-muted font-weight-bold">
                        Web, UI/UX Design
                      </span> */}
                  </td>
                  <td>
                    {/* <img src={toAbsoluteUrl("/media/logos/stars.png")} alt="image" style={{width: "5.5rem"}}/>
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                        Best Rated
                      </span> */}
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Rp 1,000,000,000
                      </span>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Rp 800,000,000
                      </span>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Asisten Deputi Olahraga
                      </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a href="#" className="btn btn-light-success font-weight-bolder font-size-sm">Lihat Hasil</a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                          <span className="symbol-label">
                            <span className="svg-icon h-75 align-self-end">
                              <SVG src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}/>
                            </span>
                          </span>
                      </div>
                      <div>
                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Kementrian Desa</a>
                        {/* <span className="text-muted font-weight-bold d-block">Partner</span> */}
                      </div>
                    </div>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Perjanjian Kerjasama Pertandingan Sepakbola
                      </span>
                    {/* <span className="text-muted font-weight-bold">
                        In Proccess
                      </span> */}
                  </td>
                  {/* <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        $8,000,000
                      </span>
                    <span className="text-muted font-weight-bold">
                        In Proccess
                      </span>
                  </td> */}
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        2020 - 2021
                      </span>
                    {/* <span className="text-muted font-weight-bold">
                        Paid
                      </span> */}
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Kerjasama A
                      </span>
                    {/* <span className="text-muted font-weight-bold">
                        Web, UI/UX Design
                      </span> */}
                  </td>
                  <td>
                    {/* <img src={toAbsoluteUrl("/media/logos/stars.png")} alt="image" style={{width: "5.5rem"}}/>
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                        Best Rated
                      </span> */}
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Rp 800,000,000
                      </span>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Rp 600,000,000
                      </span>
                  </td>
                  <td>
                      <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        Asisten Deputi Kewirausahaan Pemuda
                      </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a href="#" className="btn btn-light-success font-weight-bolder font-size-sm">Lihat Hasil</a>
                  </td>
                </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}
