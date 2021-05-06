import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Resume from '@comps/Resume';
import Spin from '@comps/Spin';
import { copyToClipboard, getVal } from '@/utils';
import useResume from '@/hooks/useResume';

import './index.scss';

// https://gitee.com/lencx/resume/raw/main/template/me.json

export default () => {
  const resumeRef = useRef(null);
  const fn = useRef<any>(null);
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const { resumeData, loading, reqResume } = useResume();

  useEffect(() => {
    reqResume();
  }, [])

  useEffect(() => {
    if (resumeData) {
      let _fn = getVal(resumeData);
      fn.current = _fn;
      document.title = `${getVal(resumeData, '个人信息', '姓名')}的简历`
    }
  }, [resumeData])


  const handleShare = () => {
    copyToClipboard(window.location.href);
    alert('已复制到剪贴板，去分享');
  }

  if (!resumeData || loading) {
    return (
      <div className="status-container">
        {loading ? <Spin /> : <div>获取简历数据失败</div>}
      </div>
    )
  }

  return (
    <div className="resume-page">
      <div className="op-status-bar">
        <div>
          <span className="pdf-btn" onClick={handlePrint}>下载PDF</span>
          <span className="share-btn" onClick={handleShare}>分享简历</span>
        </div>
        <span className="lasttime">最后更新时间: {fn.current && fn.current('最后更新时间')}</span>
      </div>
      <div className="resume-card">
        <div ref={resumeRef}><Resume dataSource={resumeData} /></div>
      </div>
    </div>
  )
}