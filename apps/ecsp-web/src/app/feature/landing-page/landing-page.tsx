import './landing-page.module.scss';
/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  return (
    <div className="min-h-screen">
      <h1 className="flex align-center place-content-center text-5xl font-extrabold text-blue-600">
        Welcome to ECSP!
      </h1>
    </div>
  );
}

export default LandingPage;
