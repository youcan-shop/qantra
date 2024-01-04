# YouCan Qantra

YouCan Qantra is a TypeScript library that helps you embed your app directly inside YouCan. YouCan Qantra works with apps embedded in YouCan Seller Area. The documentation below will help you get started.

> [Note]
> Qantra components don't render as part of the app's component hierarchy. They are around TypeScript messages that communicate with the Seller Area. The Seller Area does the UI rendering.

## YouCan UI

Inside the app surface, we encourage you to use YouCan UI to create familiar and consistent user experiences between your app and the Seller Area. Your app should import the YouCan UI Vue library, which defines the components for the Seller Area. You can refer to the [documentation](https://developer.youcan.shop/youcan-ui/) to learn more about the UI library

## Reference

### Session Token

The Session Token API asynchronously retrieves your app's authentication token from YouCan.

#### Example

```ts
const token = await qantra.sessionToken();
```

### Redirection

The redirection API allows you navigate within your app

#### Parameters

- `(url: string) => void`

#### Example

```ts
qantra.redirect('/admin/customers');
```

### Bounce

### ResourcePicker

The Resource Picker API provides a search-based interface to help users find and select one or more products (with variants) or collections, and then returns the selected resources to your app.

#### Options

- **`type`**: `product` | `collection`

#### Example

```ts
const selected = await qantra.resourcePicker({ type: 'product' });
```

<img src="assets/resource-picker.jpg" width="500" />

### Toast

The Toast API displays a non-disruptive message that appears at one of the four edges of the screen of the interface to provide quick and short feedback on the outcome of an action

#### Show method

The Toast.show method displays a Toast notification in the Shopify admin. It accepts a variety of options to customize the behavior.

```ts
qantra.toast.show({
  title: 'This is a toast 🍞',
  description: 'Settings saved successfully',
});
```

#### ToastOptions

- **`title`**: `string`
- **`description`**: `string`
- **`position`**: `top-left` | `top-right` | `bottom-left` | `bottom-right`
- **`type`**: `info` | `success` | `warning` | `error`
- **`canClose`**: `boolean`
- **`closeAfterDuration`**: `number`

#### Example

```ts
qantra.toast.show({
  title: 'Settings saved',
  description: 'User settings have been saved successfully',
  position: 'bottom-left',
  type: 'success',
  canClose: false,
  closeAfterDuration: 2000,
});
```

---

If you have a bug report or feature request, please open an issue in this repo.

![YouCan](/assets/banner.jpg)
