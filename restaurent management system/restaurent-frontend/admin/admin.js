:root {
    --primary: #ff6b6b;
    --primary-dark: #ff5252;
    --secondary: #4ecdc4;
    --dark: #2c3e50;
    --light: #f8f9fa;
    --success: #20c997;
    --warning: #ffc107;
    --danger: #dc3545;
    --gray: #6c757d;
    --light-gray: #e9ecef;
}

.admin-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.admin-section {
    background: white;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.admin-section:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.tab-container {
    display: flex;
    margin-bottom: 25px;
    border-bottom: 1px solid var(--light-gray);
}

.tab {
    padding: 12px 25px;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
    font-weight: 500;
    color: var(--gray);
}

.tab.active {
    color: var(--primary);
    border-bottom-color: var(--primary);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Add all other admin-specific styles from your original file */