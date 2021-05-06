import { useState } from 'react';

import tplData from '@/../template/me.json';

export default function useResume() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const reqResume = async (data?: string) => {
    setLoading(true);
    let _url = '@/../template/me.json';
    // let _url = 'https://raw.githubusercontent.com/lencx/resume/main/template/me.json';
    const type: any  = 'github';
    switch (type) {
      case 'github':
        break;
      case 'gitee':
        break;
      case 'url':
        break;
    }

    try {
      const res = await fetch(_url).then(res => res.json());
      setData(res);
      setLoading(false);
    } catch(e) {
      console.error(e);
    }
  }

  return { resumeData: data, loading, reqResume };
}