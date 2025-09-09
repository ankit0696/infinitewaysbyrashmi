# Image Assets - Next.js 15 + Tailwind v4

Add these **4 images** to this folder with exact filenames:

## Required Images:

### 1. `hero-image.jpg`
- **Source**: Professional courtyard photo (IMG_20250909_123004_033.jpg)
- **Used on**: Homepage hero, About page mission section
- **Recommended size**: 600×700px minimum
- **Optimization**: WebP conversion automatic via Next.js

### 2. `about-transformation.jpg` 
- **Source**: Jumping on sand dunes photo (IMG_20250909_123010_402.jpg)
- **Used on**: About page transformation story
- **Recommended size**: 600×600px minimum
- **Purpose**: Symbolizes breakthrough and transformation

### 3. `group-session.jpg`
- **Source**: Group healing session photo (IMG_20250909_122914_071.jpg)  
- **Used on**: Services page group sessions feature
- **Recommended size**: 600×400px minimum
- **Purpose**: Shows community aspect of healing

### 4. `sound-healing.jpg`
- **Source**: Singing bowl photo (IMG_20250909_123949_289.jpg)
- **Used on**: Services page sound healing feature
- **Recommended size**: 600×400px minimum  
- **Purpose**: Demonstrates sound therapy practice

## Next.js 15 Image Optimization

✅ **Automatic Features**:
- WebP/AVIF conversion when supported
- Responsive sizing with `sizes` attribute
- Lazy loading by default
- Priority loading for above-fold images
- Blur placeholder generation

✅ **Performance Benefits**:
- Reduced bandwidth usage
- Faster page load times
- Better Core Web Vitals scores
- Automatic format selection

## Tailwind CSS v4 Integration

Images work seamlessly with Tailwind utilities:
```jsx
<Image 
  src="/images/hero-image.jpg"
  className="w-full rounded-3xl shadow-brand-lg"
  // ... other props
/>
```

## File Size Recommendations

- **Original**: Keep under 2MB each
- **Optimized**: Next.js handles compression
- **Format**: JPG preferred (WebP conversion automatic)
- **Quality**: High quality (90%+) - Next.js optimizes

## Usage in Components

```jsx
import Image from 'next/image'

// Homepage Hero (priority loading)
<Image
  src="/images/hero-image.jpg"
  alt="Dr. Rashmi Professional"
  width={600}
  height={700}
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Other sections (lazy loading)
<Image
  src="/images/about-transformation.jpg"
  alt="Dr. Rashmi's Transformation"
  width={600}
  height={600}
  sizes="(max-width: 1024px) 100vw, 50vw"
/>
```

**Simply rename your 4 photos to match these exact filenames and place them in this folder!**
