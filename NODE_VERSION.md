# Project Version Configuration

## Node.js
- **Minimum version**: 22.20.0 (LTS)
- **Recommended version**: 22.20.0 or higher
- **Configuration files**:
  - `.nvmrc` - For nvm users
  - `.node-version` - For compatibility with other tools
  - `package.json` - `engines` field specifying minimum versions

## Main Dependencies Updated
- **Next.js**: ^15.5.2 (latest)
- **React**: ^19.1.1 (latest)
- **TypeScript**: ^5.9.2 (latest)
- **Tailwind CSS**: ^3.4.0 (stable and compatible version)
- **ESLint**: ^9.15.0 (latest)
- **tailwind-scrollbar**: ^2.0.0 (stable version)

## How to Use

### With nvm (Node Version Manager)
```bash
nvm use
```

### Check current version
```bash
node --version
npm --version
```

### Update dependencies
```bash
npm update
npm outdated  # Check for outdated dependencies
```

## Compatibility
- All dependencies are compatible with Node.js 22.20.0+
- The project has been tested with the latest versions of dependencies
- No security vulnerabilities detected
- Build working perfectly with Next.js 15.5.2

## Special Configurations
- **PostCSS**: Configured to use `tailwindcss` (stable version 3)
- **ESLint**: Updated to version 9 with stricter rules
- **Apostrophes**: All apostrophes have been properly escaped for compatibility
- **Tailwind CSS**: Kept at version 3.4.0 for maximum compatibility and stability
- **Custom Scrollbar**: Custom CSS implemented to ensure scrollbar functionality

## Custom Scrollbar
The project includes custom CSS styles for scrollbar:
- **`.scrollbar`**: Visible scrollbar with custom colors
- **`.scrollbarHide`**: Hides the scrollbar when needed
- **Colors**: Uses theme colors (textDark) with transparency
- **Compatibility**: Works on WebKit (Chrome, Safari, Edge) and Firefox

## Update Status
✅ **COMPLETE** - Project successfully updated to the latest versions
✅ **BUILD WORKING** - Compilation without errors
✅ **DEV SERVER** - Development server running
✅ **NO VULNERABILITIES** - All dependencies secure
✅ **TAILWIND WORKING** - CSS framework working perfectly
✅ **SCROLLBAR WORKING** - Custom scrollbar implemented

## Important Note
- **Tailwind CSS v4** was tested but caused compatibility issues
- **Version 3.4.0** was chosen for being more stable and compatible with Next.js
- All Tailwind functionalities are working normally
- **Custom scrollbar** was implemented to ensure consistent functionality 