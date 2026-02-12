## 1. Update RegistrationForm Component

- [x] 1.1 Add state variables for sex and bloodType in RegistrationForm.jsx
- [x] 1.2 Create select element for sex field with options: Masculino, Feminino, Outro
- [x] 1.3 Create select element for blood type field with options: A+, A-, B+, B-, AB+, AB-, O+, O-
- [x] 1.4 Update form validation to check that sex and bloodType are not empty
- [x] 1.5 Update onAddUser call to pass sex and bloodType along with name and age
- [x] 1.6 Clear sex and bloodType state after successful form submission

## 2. Update App Component

- [x] 2.1 Modify handleAddUser to accept and store sex and bloodType in user object
- [x] 2.2 Update CSV headers array to include 'Sexo' and 'Tipo Sanguíneo'
- [x] 2.3 Update CSV row mapping to include user.sex and user.bloodType values

## 3. Update UserList Component

- [x] 3.1 Modify user item display to show sex after age
- [x] 3.2 Add blood type display after sex
- [x] 3.3 Add appropriate separators/spacing between fields (e.g., " - ")

## 4. Styling Updates

- [x] 4.1 Verify select elements inherit form-group styling from index.css
- [x] 4.2 Add any necessary select-specific styles to match existing input fields
- [x] 4.3 Test responsive layout with longer user list items

## 5. Testing & Validation

- [x] 5.1 Test form validation: verify all fields are required
- [x] 5.2 Test user registration with all field combinations
- [x] 5.3 Verify user list displays all fields correctly
- [x] 5.4 Test CSV export includes all columns with correct data
- [x] 5.5 Verify CSV file downloads with proper filename and format
- [x] 5.6 Test with multiple users to ensure data integrity
