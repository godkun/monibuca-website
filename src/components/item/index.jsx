import React from 'react';

class Footer extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    return (
      <div {...props}>
        <div>图像</div>
      </div>
    );
  }
}

export default Footer;
