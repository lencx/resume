import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Head, { ResumeHeadProps } from './head'

import './index.scss';

const headInfo: ResumeHeadProps = {
  name: '小白',
  sex: '男',
  birthday: '2000.01.01',
  education: '本科',
  major: '计算机专业',
};

export default () => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  useEffect(() => {
    document.title = `${headInfo.name}的简历`
  }, [])

  return (
    <div className="home">
      <span className="pdf-btn" onClick={handlePrint}>下载PDF</span>
      <div ref={resumeRef}>
        <Head {...headInfo} />
      </div>
    </div>
  )
}