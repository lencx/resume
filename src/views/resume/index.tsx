import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Resume from '../../components/Resume';
import { copyToClipboard } from '../../utils';

import './index.scss';

export default () => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  useEffect(() => {
    // TODO: fetch me.yml file
    // document.title = `${data.name}的简历`
  }, [])

  const handleShare = () => {
    copyToClipboard(window.location.href);
    alert('已复制到剪贴板，去分享');
  }

  return (
    <div className="resume-page">
      <span className="pdf-btn" onClick={handlePrint}>下载PDF</span>
      <span className="share-btn" onClick={handleShare}>分享</span>
      <div ref={resumeRef}>
        <Resume dataSource={''} />
      </div>
    </div>
  )
}