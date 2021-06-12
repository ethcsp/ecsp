import './footer.module.scss';
import dayjs from 'dayjs'
/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className='footer flex place-content-center'>
      <h3 className="text-sm font-bold">ECSP &copy; {dayjs().format('YYYY')}  </h3>
    </footer>
  );
}

export default Footer;
