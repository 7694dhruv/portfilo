import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score

# 1. Load data
df = pd.read_csv('revenue_prediction.csv')

# 2. Preprocessing
le = LabelEncoder()
df['Franchise'] = le.fit_transform(df['Franchise'])
df['Category'] = le.fit_transform(df['Category'])

# Define Features (X) and Target (y)
X = df[['Franchise', 'Category', 'No_of_item', 'Order_Placed']]
y = df['Revenue']

# 3. Split Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Model Training
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 5. Evaluation
predictions = model.predict(X_test)
print(f"R2 Score: {r2_score(y_test, predictions)}")
print(f"MAE: {mean_absolute_error(y_test, predictions)}")