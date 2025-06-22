/* Menu specific styles */
.menu-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 15px;
}

.menu-item {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border-left: 4px solid var(--primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Add all other menu-specific styles from your original file */