# Tijaarat - B2B E-commerce & ERP Platform

A comprehensive, modern B2B e-commerce and ERP platform built with Next.js, designed to streamline supply chain management, vendor onboarding, and business-to-business transactions.

## 🚀 Features

### Core Marketplace Features
- **Multi-Vendor Marketplace** - Connect buyers and sellers globally
- **Advanced Product Catalog** - Rich product listings with specifications
- **Smart Search & Filtering** - Find products and vendors efficiently
- **Request for Quote (RFQ)** - Get custom quotes from multiple suppliers
- **Vendor Verification** - Rigorous supplier verification process
- **Real-time Notifications** - Stay updated on orders and inquiries

### ERP & Business Management
- **Dashboard Analytics** - Comprehensive business insights
- **Inventory Management** - Track stock levels and movements
- **Order Management** - Complete order lifecycle tracking
- **Purchase Orders** - Streamlined procurement workflows
- **Invoice Management** - Generate and track invoices
- **Vendor Performance** - Monitor supplier metrics and ratings

### User Experience
- **Role-based Access Control** - Buyers, Sellers, Admins
- **Mobile Responsive** - Works seamlessly on all devices
- **Modern UI/UX** - Clean, professional interface
- **Multi-currency Support** - Global business transactions
- **Document Management** - Upload and manage business documents

## 🛠 Technology Stack

### Frontend
- **Next.js 15.4** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Modern icon library
- **Framer Motion** - Smooth animations

### Backend & Database
- **Prisma ORM** - Type-safe database operations
- **SQLite** - Development database (easily configurable for PostgreSQL/MySQL)
- **NextAuth.js** - Authentication and session management

### Additional Libraries
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **Recharts** - Data visualization
- **React Query** - Data fetching and caching
- **Socket.io** - Real-time features

## 📁 Project Structure

```
tijaarat/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── dashboard/          # ERP dashboard
│   │   ├── products/           # Product catalog
│   │   ├── vendors/            # Vendor directory
│   │   ├── vendor-onboarding/  # Vendor registration
│   │   ├── rfq/               # Request for Quote
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   └── layout/            # Header, Footer, Navigation
│   └── lib/
│       ├── db.ts              # Database client
│       └── utils.ts           # Utility functions
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
└── docs/                      # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tijaarat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and configure your environment variables:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Generate Prisma client
- `npx prisma migrate dev` - Run database migrations

## 🏗 Database Schema

The platform includes comprehensive models for:

- **Users & Authentication** - User accounts, sessions, roles
- **Vendors** - Supplier profiles, verification, capabilities
- **Products** - Catalog items, specifications, pricing
- **Orders** - Purchase orders, order items, tracking
- **Inventory** - Stock management, movements, alerts
- **Invoicing** - Invoice generation, payment tracking
- **Analytics** - Business metrics, performance data

## 🔐 Authentication & Authorization

### Roles
- **Buyer** - Purchase products and services
- **Seller/Vendor** - List products and manage orders
- **Admin** - Platform administration
- **Vendor Admin** - Manage vendor operations

### Features
- Email/password authentication
- Role-based access control
- Session management
- Account verification

## 🎨 UI/UX Design

### Design System
- **Consistent Color Palette** - Professional B2B aesthetic
- **Typography** - Geist font family for modern look
- **Components** - Reusable shadcn/ui components
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliance

### Animations
- Smooth page transitions
- Loading states
- Hover effects
- Form interactions

## 📊 Analytics & Monitoring

### Built-in Analytics
- Revenue tracking
- Order analytics
- Vendor performance
- Inventory insights
- User engagement metrics

### Monitoring
- Error tracking
- Performance monitoring
- Database query optimization
- Real-time alerts

## 🔧 Configuration

### Database
The platform supports multiple databases:
- SQLite (development)
- PostgreSQL (recommended for production)
- MySQL
- SQL Server

### Environment Variables
Key configuration options:
- `DATABASE_URL` - Database connection string
- `NEXTAUTH_SECRET` - Authentication secret
- `EMAIL_*` - Email service configuration
- `STRIPE_*` - Payment processing (optional)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically

### Docker
```bash
docker build -t tijaarat .
docker run -p 3000:3000 tijaarat
```

### Manual Deployment
1. Build the application: `npm run build`
2. Start the server: `npm run start`
3. Configure reverse proxy (nginx)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📝 API Documentation

### REST Endpoints
- `/api/products` - Product management
- `/api/vendors` - Vendor operations
- `/api/orders` - Order processing
- `/api/rfq` - Quote requests
- `/api/analytics` - Business metrics

### Real-time Features
- Order updates via WebSocket
- Live notifications
- Inventory alerts
- Chat system

## 🔒 Security

### Security Features
- Input validation with Zod
- SQL injection prevention
- XSS protection
- CSRF protection
- Rate limiting
- Secure headers

### Best Practices
- Regular dependency updates
- Security audits
- Data encryption
- Access logging
- Backup strategies

## 📱 Mobile Support

- Progressive Web App (PWA) capabilities
- Responsive design for all screen sizes
- Touch-friendly interface
- Offline functionality
- Push notifications

## 🌐 Internationalization

- Multi-language support
- Currency localization
- Date/time formatting
- RTL language support
- Regional customization

## 📞 Support

- Documentation: [docs.tijaarat.com](https://docs.tijaarat.com)
- Email: support@tijaarat.com
- GitHub Issues: For bug reports and feature requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Prisma team for the excellent ORM
- Vercel for hosting and deployment platform

---

**Tijaarat** - Empowering B2B commerce worldwide 🌍
