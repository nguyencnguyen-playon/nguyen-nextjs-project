### Project structure
```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── .env                            # environments configuration
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── app                             # Next JS App (App Router)
├── components                      # React components
│   ├── CreatePosts                 # React components
│   ├── Header                      # 3rd party libraries configuration
│   ├── LayoutContent               # Locales folder (i18n messages)
│   ├── PaginationComponent         # Database models
├── coverage
├── interfaces
├── services
├── providers
├── libs
├── models
├── utils
├── views
├── jest.config.js
└── tsconfig.json                   # TypeScript configuration
```

## Stacks using

Build fully NextJS project from scratch fullstacks
- Authentication with Clerk
- Database with Turso + Lambda function with NextJS API Route
- CSS with styled-components
- Unit testing with Jest (Coverage > 60%)
- Deployment with Vercel
- Form management with react-hook-form
- React state management and API caching with react-query

### Requirements

- Node.js 18+ and npm

### Coverage

File                                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------------------|---------|----------|---------|---------|-------------------
All files                              |   98.19 |       80 |      60 |   98.19 |                   
 CreatePosts                           |   95.31 |      100 |      50 |   95.31 |                   
  CreatePosts.tsx                      |   95.31 |      100 |      50 |   95.31 | 23-25             
 Header                                |     100 |       50 |      50 |     100 |                   
  Header.tsx                           |     100 |       50 |      50 |     100 | 14                
  index.tsx                            |     100 |      100 |     100 |     100 |                   
 LayoutContent                         |     100 |      100 |     100 |     100 |                   
  LayoutContent.tsx                    |     100 |      100 |     100 |     100 |                   
 PaginationComponent                   |   97.27 |    71.42 |      75 |   97.27 |                   
  PaginationComponent.tsx              |   97.27 |    71.42 |      75 |   97.27 | 37-39             
 PaginationComponent/DropDown          |    97.1 |      100 |      50 |    97.1 |                   
  DropDown.base.ts                     |     100 |      100 |     100 |     100 |                   
  DropDown.tsx                         |   95.45 |      100 |      50 |   95.45 | 27-28             
 PaginationComponent/PageNumberButtons |     100 |      100 |      50 |     100 |                   
  PageNumberButtons.tsx                |     100 |      100 |      50 |     100 |                   
 PaginationComponent/PostItem          |     100 |       50 |     100 |     100 |                   
  PostItem.tsx                         |     100 |       50 |     100 |     100 | 25                
---------------------------------------|---------|----------|---------|---------|-------------------

### Demo Image
<img width="1420" alt="image" src="https://github.com/nguyencnguyen-playon/nguyen-nextjs-project/assets/131789853/f8f67894-d900-4153-9c16-1bf637c86fcd">
<img width="1426" alt="image" src="https://github.com/nguyencnguyen-playon/nguyen-nextjs-project/assets/131789853/cbafcfc5-a61c-4b18-b23e-4b0d71c53c7c">
<img width="1438" alt="image" src="https://github.com/nguyencnguyen-playon/nguyen-nextjs-project/assets/131789853/5d6a9ebd-ef07-426d-8bcd-69b2586d1f18">

### Advisor
Tin Tran tintran@kms-technology.com
