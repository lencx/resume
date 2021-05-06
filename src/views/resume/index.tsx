import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import curry from 'lodash/curry';

import Resume from '@comps/Resume';
import { copyToClipboard, curryGetVal, getVal } from '@/utils';
import tplData from '@/../template/me.json';

import './index.scss';

export default () => {
  const resumeRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const fn = getVal(tplData);

  useEffect(() => {
    document.title = `${getVal(tplData, '个人信息', '姓名')}的简历`
  }, [])

  const handleShare = () => {
    copyToClipboard(window.location.href);
    alert('已复制到剪贴板，去分享');
  }

  return (
    <div className="resume-page">
      <div className="op-status-bar">
        <div>
          <span className="pdf-btn" onClick={handlePrint}>下载PDF</span>
          <span className="share-btn" onClick={handleShare}>分享简历</span>
        </div>
        <span className="lasttime">最后更新时间: {fn('最后更新时间')}</span>
      </div>
      <div className="resume-card">
        <div ref={resumeRef}><Resume dataSource={tplData} /></div>
      </div>
    </div>
  )
}