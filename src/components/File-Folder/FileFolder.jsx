import React from 'react'
import { useLocation } from 'react-router-dom';
import { FullFileBrowser } from 'chonky';

const FileFolder = () => {
    // const location = useLocation();
    // console.log(location);
    
    const files = [
        { id: 'lht', name: 'Projects', isDir: true },
        {
            id: 'mcd',
            name: 'chonky-sphere-v2.png',
            thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
        },
    ];

    const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true }];

  return (
    <div>
        <FullFileBrowser files={files} folderChain={folderChain} />
    </div>
  )
}

export default FileFolder