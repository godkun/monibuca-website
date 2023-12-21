import React from 'react';
class Banner extends React.PureComponent {
  render() {

    return (
      <div className="banner10-wrap">
      <div className='banner10 home-page-wrapper'>
        <div className='content home-page'>
          <div className='title'>产品下载</div>
          <div className='desc'>
            根据所需要的系统版本进行下载
            <span className='version'>最新版:v4.5.8</span>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Banner;
