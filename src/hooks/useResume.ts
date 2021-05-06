import { useState } from 'react';

import tplData from '@/../template/me.json';

export default function useResume() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const reqResume = async (data?: any) => {
    if (!data) {
      setData(tplData as any);
      return;
    }

    setLoading(true);
    let _url = '';
    switch (data.type) {
      case 'github':
        _url = `https://raw.githubusercontent.com/${data.username}/${data.repo}/${data.branch}/${data.path}`;
        break;
      case 'gitee':
        _url = `https://gitee.com/${data.username}/${data.repo}/raw/${data.branch}/${data.path}`
        break;
      case 'url':
        _url = data.link;
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