import './header.module.scss';
import { PageHeader, Button } from 'antd';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <PageHeader
      className="w-full"
      ghost={false}
      onBack={() => null}
      title="ECSP"
      subTitle="Empower Innovate Accelerate"
      extra={[
        <Button key="3">About</Button>,
        <Button key="2">Mission</Button>,
        <Button key="1" type="primary">
          Join ECSP
        </Button>,
      ]}
    >
      <Button type="ghost">Ghost Button</Button>
    </PageHeader>
  );
}

export default Header;
