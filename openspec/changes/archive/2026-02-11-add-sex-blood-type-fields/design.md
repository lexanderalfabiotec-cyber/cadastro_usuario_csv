## Context

The current React registration application collects only basic user information (name and age) and exports it to CSV. The system uses:
- React with hooks for state management
- Controlled form inputs in `RegistrationForm.jsx`
- Simple array-based user storage in `App.jsx`
- Client-side CSV generation using Blob API

This change extends the system to capture health-related data (biological sex and blood type) to support healthcare and medical use cases.

**Current State:**
- User object: `{ name: string, age: number }`
- Form fields: Nome Completo, Idade
- CSV columns: Nome, Idade
- No dropdown/select components in use

**Constraints:**
- Must maintain existing functionality (name and age)
- Portuguese language UI
- Client-side only (no backend)
- Must work with existing styling system

## Goals / Non-Goals

**Goals:**
- Add sex field with three options: Masculino, Feminino, Outro
- Add blood type field with eight options: A+, A-, B+, B-, AB+, AB-, O+, O-
- Extend user data model to include `sex` and `bloodType` properties
- Update CSV export to include new columns
- Validate that all fields (including new ones) are filled before submission
- Display sex and blood type in the user list

**Non-Goals:**
- Backend integration or data persistence beyond local state
- Internationalization (keeping Portuguese only)
- Advanced blood type validation (e.g., Rh factor compatibility)
- Edit/delete functionality for existing users
- Data migration for existing users (fresh state on page load)

## Decisions

### Decision 1: Use HTML `<select>` elements for new fields
**Rationale:** Both sex and blood type have predefined, limited options. Select dropdowns provide:
- Better UX than text input (no typos, consistent data)
- Native browser validation
- Accessibility support out of the box
- Consistency with form validation pattern

**Alternatives considered:**
- Radio buttons: Would take too much vertical space (especially for 8 blood type options)
- Text input with validation: Error-prone and requires complex validation logic

### Decision 2: Store blood type as single string (e.g., "A+", "O-")
**Rationale:** 
- Simpler data model than separating ABO type and Rh factor
- Matches how blood types are commonly displayed
- Easier CSV export (single column)
- Sufficient for the use case (display and export, not medical calculations)

**Alternatives considered:**
- Separate fields for ABO and Rh: More complex, unnecessary for current requirements
- Numeric codes: Less readable in CSV exports

### Decision 3: Make new fields required
**Rationale:**
- Aligns with existing validation pattern (all fields required)
- Ensures data completeness for healthcare use cases
- Simpler validation logic (consistent rules for all fields)

**Alternatives considered:**
- Optional fields: Would require handling empty states throughout the app and CSV export

### Decision 4: Update UserList to display new fields inline
**Rationale:**
- Maintains current simple card-based layout
- Shows all user information at a glance
- Minimal CSS changes needed

**Layout approach:**
```
[Name] - [Age] anos - [Sex] - [Blood Type]
```

**Alternatives considered:**
- Table layout: More complex, overkill for current data volume
- Expandable cards: Adds unnecessary interaction complexity

### Decision 5: Extend CSV export inline in App.jsx
**Rationale:**
- Current CSV logic is simple and contained in one function
- No need for separate utility module yet
- Maintains code locality

**Alternatives considered:**
- Extract to utils/csvExport.js: Premature abstraction for current scope

## Risks / Trade-offs

### Risk: Existing users in localStorage (if implemented later)
**Mitigation:** If localStorage is added later, implement a migration function that adds default values for `sex` and `bloodType` to existing records, or clear old data on schema change.

### Risk: Long user list items with additional fields
**Mitigation:** Use responsive design with text truncation or wrapping. Consider adding a max-width to user-item cards.

### Trade-off: Required fields reduce flexibility
**Impact:** Users must provide all information to register. This is acceptable for healthcare use cases but may not suit all scenarios.
**Mitigation:** Document this requirement clearly in the UI.

### Trade-off: No validation for realistic blood type combinations
**Impact:** System accepts any blood type selection without medical validation (e.g., doesn't check if blood type is medically valid).
**Mitigation:** This is acceptable as the system is for registration, not medical diagnosis. If needed later, add a validation layer.

## Implementation Notes

**Component Changes:**

1. **RegistrationForm.jsx**
   - Add state: `const [sex, setSex] = useState('')`
   - Add state: `const [bloodType, setBloodType] = useState('')`
   - Add two `<select>` elements with appropriate options
   - Update validation to check all four fields
   - Update `onAddUser` call to include sex and bloodType

2. **App.jsx**
   - Update user object structure in `handleAddUser`
   - Modify CSV headers array: `['Nome', 'Idade', 'Sexo', 'Tipo Sanguíneo']`
   - Update CSV row mapping to include `user.sex` and `user.bloodType`

3. **UserList.jsx**
   - Update user item display to show sex and blood type
   - Add appropriate spacing/styling for new fields

4. **index.css** (if needed)
   - Ensure form-group styling works with select elements
   - Add any specific styling for select dropdowns to match existing input fields

**Data Flow:**
```
User fills form → State updates (name, age, sex, bloodType) 
→ Validation on submit → Add to users array 
→ Display in UserList → Export to CSV with all fields
```
