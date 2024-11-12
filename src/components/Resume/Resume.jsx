import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

const Resume = () => {
  return (
    <div id='Resume' className="px-4 py-8 mt-7">
      <h2 className="text-3xl font-bold text-center text-white mb-8">My Resume</h2>
      <h1 className='text-lg text-center font-semibold mt-2 text-gray-600'>Daftar riwayat pendidikan dan pengalaman perkerjaan saya </h1>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: '#171d32', 
            color: '#fff', 
            boxShadow: '0px 4px 20px rgba(173, 216, 230, 0.4)' 
          }}
          contentArrowStyle={{ borderRight: '7px solid #171d32' }}
          date={<span className="text-white">2010 - 2016</span>} 
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="text-xl font-bold text-white">Sekolah Dasar</h3>
          <h4 className="text-lg text-gray-400">Saya memulai pendidikan di SDN 1 Limbangan Kulon Brebes</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: '#171d32', 
            color: '#fff', 
            boxShadow: '0px 4px 20px rgba(173, 216, 230, 0.4)' 
          }}
          contentArrowStyle={{ borderRight: '7px solid #171d32' }}
          date={<span className="text-white">2016 - 2019</span>} 
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="text-xl font-bold text-white">Sekolah Menengah Pertama</h3>
          <h4 className="text-lg text-gray-400">Saya melanjutkan pendidikan saat remaja di SMPN 3 Brebes</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: '#171d32', 
            color: '#fff', 
            boxShadow: '0px 4px 20px rgba(173, 216, 230, 0.4)' 
          }}
          contentArrowStyle={{ borderRight: '7px solid #171d32' }}
          date={<span className="text-white">2019 - 2022</span>} 
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="text-xl font-bold text-white">Sekolah Menengah Atas</h3>
          <h4 className="text-lg text-gray-400">Di SMAN 3 Brebes, saya jurusan IPA</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: '#171d32', 
            color: '#fff', 
            boxShadow: '0px 4px 20px rgba(173, 216, 230, 0.4)' 
          }}
          contentArrowStyle={{ borderRight: '7px solid #171d32' }}
          date={<span className="text-white">2022 - present</span>} 
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="text-xl font-bold text-white">Mahasiswa</h3>
          <h4 className="text-lg text-gray-400">Saya sekarang sedang menjalani pendidikan di STMIK YPI Tegal</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: '#171d32', 
            color: '#fff', 
            boxShadow: '0px 4px 20px rgba(173, 216, 230, 0.4)' 
          }}
          contentArrowStyle={{ borderRight: '7px solid #171d32' }}
          date="5 bulan"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="text-xl font-bold text-white">Qyu Laundry</h3>
          <h4 className="text-lg text-gray-400">Saya bekerja di qyu laundry hanya beberapa bulan karna sudah ada jadwal untuk menjalani pendidikan</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: '#171d32', 
            color: '#fff', 
            boxShadow: '0px 4px 20px rgba(173, 216, 230, 0.4)' 
          }}
          contentArrowStyle={{ borderRight: '7px solid #171d32' }}
          date="2023 - Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="text-xl font-bold text-white">PT Absolute Service Nusantara</h3>
          <h4 className="text-lg text-gray-400">Saya Berkerja sebagai Freelance di PT tersebut</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Resume;