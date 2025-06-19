// Test file to verify component loading
import React from 'react';

// Test Technology component
const testTechnology = async () => {
  try {
    const { default: Technology } = await import('./components/Technology');
    console.log('✅ Technology component loaded successfully');
    return true;
  } catch (error) {
    console.error('❌ Technology component failed to load:', error);
    return false;
  }
};

// Test JoinUs component
const testJoinUs = async () => {
  try {
    const { default: JoinUs } = await import('./components/JoinUs');
    console.log('✅ JoinUs component loaded successfully');
    return true;
  } catch (error) {
    console.error('❌ JoinUs component failed to load:', error);
    return false;
  }
};

// Test Technology component centering
const testTechnologyCentering = async () => {
  try {
    const { default: Technology } = await import('./components/Technology');
    
    // Create a temporary div to render the component
    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
    
    // Render the component
    const ReactDOM = await import('react-dom/client');
    const root = ReactDOM.createRoot(tempDiv);
    root.render(React.createElement(Technology));
    
    // Wait for component to render
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Check if Container component is present
    const container = tempDiv.querySelector('[class*="container"]');
    const isCentered = container && container.classList.contains('mx-auto');
    
    // Cleanup
    root.unmount();
    document.body.removeChild(tempDiv);
    
    if (isCentered) {
      console.log('✅ Technology component is properly centered with Container');
      return true;
    } else {
      console.error('❌ Technology component is not properly centered');
      return false;
    }
  } catch (error) {
    console.error('❌ Technology centering test failed:', error);
    return false;
  }
};

// Test all components
export const testAllComponents = async () => {
  console.log('🧪 Testing component loading...');
  
  const results = await Promise.allSettled([
    testTechnology(),
    testJoinUs(),
    testTechnologyCentering(),
  ]);
  
  const successCount = results.filter(result => 
    result.status === 'fulfilled' && result.value === true
  ).length;
  
  console.log(`📊 Component test results: ${successCount}/${results.length} components loaded successfully`);
  
  return successCount === results.length;
};

// Run tests if this file is imported
if (typeof window !== 'undefined') {
  testAllComponents();
} 