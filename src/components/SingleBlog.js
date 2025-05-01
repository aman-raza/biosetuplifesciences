import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SingleBlog.css';
import edible from '../assets/edible.jpg';
import biopharm from '../assets/biopharming.jpg';
import biotech from '../assets/biotech.jpg';
import drug from '../assets/drug.jpg';

const blogDetails = {
  1: {
    title: 'Edible Vaccines',
    author: 'Esoh Rene Tanwieh',
    image: edible,
    content: `Edible vaccines represent a groundbreaking innovation in biotechnology, combining immunology and genetic engineering to create vaccines that can be consumed as food. These vaccines are developed by introducing specific genes encoding antigens into plants, enabling them to express immune-triggering proteins. Once consumed, plant cells protect these antigens from degradation in the stomach. In the intestine, they are released and stimulate both mucosal and systemic immunity. This delivery method offers notable benefits — it is cost-effective, does not require refrigeration, avoids needles, and eliminates the need for trained medical personnel, making it especially useful in remote or underdeveloped areas.

    These vaccines have been successfully tested for diseases like cholera, hepatitis B, measles, rotavirus, and even COVID-19. Common carrier crops include bananas, tomatoes, potatoes, and rice. Beyond infectious diseases, edible vaccines also show potential in managing autoimmune disorders and cancer. However, challenges remain — ensuring consistent dosage is difficult due to natural plant variability, and heat during cooking may degrade antigen proteins. Moreover, the use of genetically modified organisms (GMOs) brings regulatory hurdles and ethical concerns that need to be addressed before widespread implementation.
    
    Despite these challenges, edible vaccines hold immense promise, particularly in improving access to immunization in low-income regions. With ongoing clinical trials and advances in biotechnology, they may revolutionize global healthcare delivery. If regulatory frameworks and technical barriers can be resolved, edible vaccines could transform how the world approaches disease prevention — delivering immunity through the very food we eat.`
    
  },
  2: {
    title: 'Top Careers in Biotechnology',
    author: 'BSL Research Team',
    image: biotech,
    content: `Biotechnology offers diverse career paths ranging from genetic engineering...
    [you can add more content or dummy text here]`
  },
  3: {
    title: 'AI in Drug Discovery',
    author: 'BSL Editorial Board',
    image: drug,
    content: `Artificial intelligence is revolutionizing the way drugs are discovered...
    [you can complete this with your own content]`
  },
  4: {
    title: 'Biopharming',
    author: 'BSL Team',
    image: biopharm,
    content: `Biopharming, a subset of agricultural biotechnology, involves genetically engineering plants to produce therapeutic proteins, vaccines, and pharmaceuticals. The concept dates back to the 1980s with early successes like producing human growth hormone in tobacco. A milestone was achieved in 2012 when the FDA approved taliglucerase alfa, derived from carrot cells, marking the first plant-made pharmaceutical (PMP) approved for human use. Plants like tobacco, maize, and lettuce are commonly used due to their high biomass or suitability for oral delivery. Through stable or transient expression methods, genes are inserted into plant cells using Agrobacterium or gene gun techniques to generate the target proteins.

    Biopharming applications range from vaccines (e.g., ZMapp for Ebola, Medicago’s Covifenz for COVID-19) to therapeutic proteins like insulin and lactoferrin, and antibodies such as CaroRx. Compared to traditional mammalian cell culture systems, PMPs offer several advantages: lower production costs, greater scalability, safety from human pathogen contamination, and better storage (especially in the case of oral vaccines). However, the field is not without challenges. Technical hurdles like variable yields, purification issues, and potential allergenicity must be addressed. Regulatory concerns, biosafety risks such as gene escape into the environment, and public skepticism toward GMOs also present significant barriers to adoption.
    
    The future of biopharming is promising. CRISPR gene editing can enhance precision and protein output, while edible vaccines may improve accessibility in resource-poor settings. Nanotechnology is being explored to improve delivery mechanisms, and multifunctional plant therapeutics are on the horizon. Regulatory frameworks are gradually adapting, though global harmonization is needed, as highlighted by WHO’s hesitation to approve Covifenz due to its tobacco industry ties. In conclusion, biopharming has the potential to revolutionize pharmaceutical production and global health, provided safety, ethical, and technical concerns are responsibly managed.`
    
  }
};

function SingleBlog() {
  const { id } = useParams();
  const blog = blogDetails[id];

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="single-blog">
      <div className="blog-header">
        <img src={blog.image} alt={blog.title} />
        <div className="blog-meta">
          <h1>{blog.title}</h1>
          <p><strong>By</strong> {blog.author}</p>
        </div>
      </div>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
      <Link to="/blogs" className="back-link">← Back to Blogs</Link>
    </div>
  );
}

export default SingleBlog;
