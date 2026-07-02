import Nav from '../components/Nav';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Badge from '../components/Badge';

const navItems = [
  { label: 'Overview', href: '/overview' },
  { label: 'Onboarding', href: '/onboarding' },
  { label: 'Team', href: '/team' },
  { label: 'Billing', href: '/billing' },
];

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav items={navItems} activeHref="/onboarding" />
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="mb-6 flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-gray-900">Set up your account</h1>
          <Badge tone="warning">Step 3 of 4</Badge>
        </div>

        <Card>
          <h2 className="text-lg font-semibold text-gray-900">Complete your profile</h2>
          <p className="mt-1 text-sm text-gray-600">
            We need a few more details before you can invite your team.
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <Input label="Full name" name="full_name" placeholder="Jane Doe" required />
            <Input label="Role" name="role" placeholder="e.g. Operations Manager" required />
            {/* Launch Café fix: onboarding_step_3 had 62% drop-off (6,050 users/week) across 6 required fields; team_size, company_logo, bio, and timezone are non-essential to unblock the funnel, so they're now optional */}
            <Input
              label="Team size (optional)"
              name="team_size"
              type="number"
              placeholder="e.g. 12"
            />
            <Input
              label="Company logo URL (optional)"
              name="company_logo"
              placeholder="https://example.com/logo.png"
            />
            <Input
              label="Short bio (optional)"
              name="bio"
              placeholder="Tell us a bit about your role"
            />
            <Input
              label="Timezone (optional)"
              name="timezone"
              placeholder="e.g. America/New_York"
            />

            <div className="mt-4 flex justify-between">
              <Button variant="secondary">Back</Button>
              <Button variant="primary">Continue</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
