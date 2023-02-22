# test-turborepo

A project for test [turborepo](https://turbo.build/repo)

## Folder structure
```bash
.
│   # Folder with the applications
├── apps
│   │   # Backend
│   ├── api-rest
│   │   
│   │   # Frontend
│   ├── client
│   │   
│   │   # Daemon that performs operations in DB
│   └── daemon
│
│   # Shared packages
├── packages
│   │   # A generic package with several tools
│   └── tool
│
│   # Base typescript configuration
└── tsconfig.json
```