# Environment Variables Configuration for OCEANFLO Landing Page

## Preloader Configuration

You can now control whether the preloader is shown or hidden using an environment variable.

### Setup Instructions:

1. **Create a `.env` file** in the root directory of your project (same level as `package.json`)

2. **Add the following content** to your `.env` file:

   ```
   # Preloader Configuration
   # Set to 'true' to enable preloader, 'false' to disable
   PRELOADER_ENABLED=true
   ```

3. **Modify the value** as needed:

   - `PRELOADER_ENABLED=true` - Shows the preloader (default behavior)
   - `PRELOADER_ENABLED=false` - Hides the preloader completely

4. **Restart your development server** for changes to take effect:
   ```bash
   npm run dev
   ```

### Usage Examples:

#### Enable Preloader (Default):

```bash
# In your .env file
PRELOADER_ENABLED=true
```

#### Disable Preloader:

```bash
# In your .env file
PRELOADER_ENABLED=false
```

#### Using Different Values:

- `true`, `TRUE`, `True` - All enable the preloader
- `false`, `FALSE`, `False` - All disable the preloader
- If not specified - Defaults to `true` (preloader enabled)

### Production Deployment:

For production deployments (Vercel, Netlify, etc.), add the environment variable in your hosting platform:

- **Variable Name**: `PRELOADER_ENABLED`
- **Value**: `true` or `false`

### Technical Details:

- The preloader state is determined at component initialization
- When disabled, the preloader component is not rendered at all
- The page loads immediately without any loading animation
- All other website functionality remains unchanged

### Note:

- Make sure to add `.env` to your `.gitignore` file to avoid committing sensitive information
- The `.env` file should not be committed to version control
- Each team member can have their own local `.env` configuration
