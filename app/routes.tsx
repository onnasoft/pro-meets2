import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route('/.well-known/appspecific/com.chrome.devtools.json', './routes/nothing.tsx'),

  route('/', './routes/layout.tsx', [
    index('./routes/_index.tsx'),
    route('/blog', './routes/blog.tsx'),
    route('/about-us', './routes/about.tsx'),
    route('/demo', './routes/demo.tsx'),
    route('/why-us', './routes/why-us.tsx'),
    route('/support', './routes/support.tsx'),
  ]),

  route('/invite', './routes/invite.tsx'),

  // Auth
  route('/login', './routes/auth/login.tsx'),
  route('/signup', './routes/auth/signup.tsx'),
  route('/resend-verification-email', './routes/auth/resend-verification-email.tsx'),
  route('/resend-verification/:email', './routes/auth/resend-verification.$email.tsx'),
  route('/reset-password', './routes/auth/reset-password.tsx'),
  route('/forgot-password', './routes/auth/forgot-password.tsx'),
  route('/verification-sent', './routes/auth/verification-sent.tsx'),
  route('/verify-email', './routes/auth/verify-email.tsx'),

  // Dashboard
  route('/dashboard', './routes/dashboard/layout.tsx', [
    index('./routes/dashboard/_index.tsx'),
    route('analytics', './routes/dashboard/analytics.tsx'),
    route('billing', './routes/dashboard/billing.tsx'),
    route('candidates', './routes/dashboard/candidates.tsx'),
    route('documents', './routes/dashboard/documents._index.tsx'),
    route('documents/new', './routes/dashboard/documents.new.tsx'),
    route('invitations', './routes/dashboard/invitations.tsx'),
    route('jobs', './routes/dashboard/jobs._index.tsx'),
    route('jobs/new', './routes/dashboard/jobs.new.tsx'),
    route('jobs/:id', './routes/dashboard/jobs.$id.tsx'),
    route('meetings', './routes/dashboard/meetings.tsx'),
    route('messages', './routes/dashboard/messages.tsx'),
    route('notifications', './routes/dashboard/notifications.tsx'),
    route('organizations/new', './routes/dashboard/organizations.new.tsx'),
    route('organizations/:id', './routes/dashboard/organizations.$id.tsx'),
    route('profile', './routes/dashboard/profile.tsx'),
    route('projects', './routes/dashboard/projects._index.tsx'),
    route('projects/new', './routes/dashboard/projects.new.tsx'),
    route('projects/:id', './routes/dashboard/projects.$id.tsx'),
    route('recordings', './routes/dashboard/recordings.tsx'),
    route('security', './routes/dashboard/security.tsx'),
    route('settings', './routes/dashboard/settings.tsx'),
  ]),

  // Jobs
  route('/jobs', './routes/jobs/index.tsx'),
  route('/jobs/:id', './routes/jobs/$id.tsx')
] satisfies RouteConfig;
