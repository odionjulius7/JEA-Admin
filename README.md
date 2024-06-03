## Minimal [(Free version)](https://minimal-kit-react.vercel.app/)

<!-- Lending And Borrowing APP Admin Control -->

## Jea App

<!--
exports.updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await  User.findByIdAndUpdate(id, image, {
      new: true,
    });;

    const response = new Response(
      true,
      200,
      "Blog post updated successfully",
      blog
    );
    res.status(response.code).json(response);
  } catch (err) {
    console.log(err);
    const response = new Response(false, 500, "Server Error", err);
    res.status(response.code).json(response);
  }
};

upload.single("image"),

  cloudinary.uploader.upload(req.file.path, async (error, result) => {
      if (result) {
        let image = result.secure_url;
        await userService.updateUserWithId(id, { image });

        const response = new Response(
          true,
          200,
          "Image uploaded successfully",
          image
        );
        userLogger.info(`User Image Updated - ${id}`);
        return res.status(response.code).json(response);
      }
    });

  const [property_details, setProperty_details] = useState({
    price: '',
    address: '',
    additional_fees: '',
    property_id: '',
    property_type: '',
    year_built: '',
    category: '',
    status: '',
    Number_of_Stories: '',
    garage_capacity: '',
    recent_renovations: '',
    youtube_url: '',
  });

  const [features, setFeatures] = useState({
    feature_1: '',
    feature_2: '',
    feature_3: '',
    feature_4: '',
    feature_5: '',
    feature_6: '',
    feature_7: '',
    feature_8: '',
  });
  const [neighborhood_info, setNeighborhood_info] = useState({
    neighborhood_info1: '',
    neighborhood_info2: '',
    neighborhood_info3: '',
    neighborhood_info4: '',
    neighborhood_info5: '',
    neighborhood_info6: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty_details((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleChangeFatures = (e) => {
    const { name, value } = e.target;
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: value,
    }));
  };

  const handleChangeInfo = (e) => {
    const { name, value } = e.target;
    setNeighborhood_info((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
 -->
