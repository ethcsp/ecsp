import './landing-page.module.scss';
/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-extrabold">Welcome to ECSP!</h1>
    </div>
  );
}

export default LandingPage;
