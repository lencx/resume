import React, { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Resume from '@comps/Resume';
import Spin from '@comps/Spin';
import useResume from '@/hooks/useResume';
import { copyToClipboard, getVal, fmtResumeAddr } from '@/utils/tools';

import './index.scss';

// https://gitee.com/lencx/resume/raw/main/template/me.json

export default () => {
  const resumeRef = useRef(null);
  const params: any = useParams();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const { resumeData, loading, reqResume, msg } = useResume();

  useEffect(() => {
    if (params?.resume) {
      const _data = fmtResumeAddr(atob(params?.resume || ''));
      reqResume(_data);
    }
  }, [])

  useEffect(() => {
    if (resumeData) {
      document.title = `${getVal(resumeData, '个人信息', '姓名')}的简历`
    }
  }, [resumeData])


  const handleShare = () => {
    copyToClipboard(window.location.href);
    // alert('已复制到剪贴板，去分享');
    toast("已复制到剪贴板，去分享")
  }

  if (!resumeData || loading || msg) {
    return (
      <div className="status-container">
        {loading ? <Spin /> : <div>{msg || '获取简历数据失败'}</div>}
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
        <span className="lasttime">最后更新时间: {getVal(resumeData, '最后更新时间')}</span>
      </div>
      <div className="resume-card">
        <div ref={resumeRef}><Resume dataSource={resumeData} /></div>
      </div>
    </div>
  )
}