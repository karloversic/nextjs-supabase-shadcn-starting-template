# Next.js App Template with Supabase Auth and ShadCN/UI Theme Provider

This project is a boilerplate for quickly starting a Next.js application with integrated **Supabase Auth** (email/password + Google authentication) and **ShadCN/UI** theme provider.

## 🚀 Features

- **Authentication**:  
  Secure and user-friendly login using Supabase for:
    - Email and password
    - Google OAuth integration

- **Theming**:  
  Built-in light and dark mode support, powered by **ShadCN/UI**.

- **Extendable and Ready-to-Go**:  
  Includes preconfigured tools and best practices for rapid development and scalability.

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org)
- [Supabase](https://supabase.com) (Database and Authentication)
- [ShadCN/UI](https://shadcn.dev) (Theme provider)
- [Tailwind CSS](https://tailwindcss.com) (Styling)

---

## 📦 Installation

1. **Create Project**:
   ```bash
   npx create-next-app -e https://github.com/karloversic/nextjs-supabase-shadcn-starting-template
   ```

2. **Configure Environment**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Update the placeholders in `.env.local` after setting up your Supabase project (explained in the **Configuration** section).


4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## ⚙️ Configuration

### 1. Create a Supabase Project:
- Go to [Supabase](https://supabase.com) and create a new project.
- Once your project is created, go to **Project Settings** → **API**, and copy the following values:
    - `Project URL` → Replace `<your_supabase_url>`
    - `Anon Key` → Replace `<your_supabase_anon_key>`

### 2. Update Environment Variables:
Open the `.env.local` file and paste the values from your Supabase project:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### 3. Enable Authentication:
- In the Supabase dashboard, go to **Authentication** → **Settings**, and enable:
    - **Email/Password Authentication**
    - **Google OAuth Authentication**
- For Google OAuth:
    - Create credentials in the [Google Cloud Console](https://console.cloud.google.com).
    - Use the callback URL provided in Supabase.

### 4. Customize ShadCN/UI Theme:
- Modify the theme in `src/app/layout.tsx` as needed.
- Adjust Tailwind configurations in `tailwind.config.js`.

### 5. Deploy the App:
- Use platforms like [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).
- Add the `.env.local` values as environment variables in the hosting platform.

---

## 🧑‍💻 Development

To start development, use the following command:
```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE)

---

## 🙌 Acknowledgments

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN/UI Guide](https://shadcn.dev)

---

Happy coding! 💻✨

