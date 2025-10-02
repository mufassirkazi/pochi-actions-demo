# Changelog

## Unreleased

### Added
- Complete task management application with Express.js backend and React frontend
- Full CRUD operations for tasks (create, read, update, delete)
- RESTful API endpoints for task management
- Frontend React application with task list, add, toggle, and delete functionality
- TypeScript support for both backend and frontend
- Development and production build processes
- Vite configuration for frontend development with proxy to backend
- Comprehensive README with project documentation and usage examples

### Changed
- Updated project from a simple user management API to a task management application
- Renamed GitHub workflow from "Pochi Manual Reviewer" to "Pochi Reviewer & Gatekeeper"
- Simplified workflow logic to use Pochi's output directly for decision making
- Updated workflow conditions to check for ✅ APPROVED in Pochi's output

### Removed
- User management functionality (users API endpoints)
- Complex decision logic in GitHub workflow
- Slack notification job from workflow
- Explicit rejection status job from workflow

## [0.1.0] - 2025-10-01
- Initial setup