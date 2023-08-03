module.exports = () => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Auth System</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Poppins", sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="row mt-5 mb-2 pt-5">
        <div class="col-12 text-center">
          <h1 style="font-weight: 800">Auth System</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mx-auto">
          <form>
            <div class="mb-3">
              <label for="Password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <ul type="square" style="font-size: 14px;" class="text-success">
              <li>Password must be 6 characters long.</li>
              <li>
                Password must have one Uppercase,<br /> LowerCase and
                Special character.
              </li>
            </ul>
            <div class="mb-3">
              <label for="CPassword" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="CPassword"
                placeholder="Confirm Password"
              />
            </div>
            <input
              type="submit"
              value="Change Password"
              class="btn btn-success"
            />
          </form>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

    `;
};
