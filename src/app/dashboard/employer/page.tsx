import { Metadata } from "next";
import Header from "./components/header";
import AnnouncementsTips from "./components/announcement-tips";
import CompanyPerformanceMetrics from "./components/company-performance-metrics";
import JobPostingsOverview from "./components/job-posting-overview";
import RecentApplications from "./components/recent-candidates";
import RevenueSubscription from "./components/revenue-subscriptions";
import ShortlistedCandidates from "./components/short-listed-candidates";
import ApplicantStatistics from "./components/applicant-statistics";

export const metadata: Metadata = {
  title: "Employer Dashboard",
  description: "Employer dashboard to manage job listings and applications",
};

export default function EmployerDashboard() {
  return (<div className="p-6">
  <Header />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    <div className="lg:col-span-2">
      <JobPostingsOverview />
    </div>
    <div>
      <CompanyPerformanceMetrics />
    </div>
    <div className="lg:col-span-2">
      <ApplicantStatistics />
    </div>
    <div>
      <ShortlistedCandidates />
    </div>
    <div className="lg:col-span-2">
      <RecentApplications />
    </div>
    <div>
      <RevenueSubscription />
    </div>
    <div className="lg:col-span-3">
      <AnnouncementsTips />
    </div>
  </div>
</div>);
}
