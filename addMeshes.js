import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	MeshLambertMaterial,
	MeshPhysicalMaterial,
	Mesh,
	SphereGeometry,
	TextureLoader,
} from 'three'


const loader = new TextureLoader();

export const planet1 = () => {
	const planet1Geometry = new SphereGeometry(0.1, 32, 16)
	const planet1Material = new MeshLambertMaterial({ color: 0xf8f7ff, emissive: 0xe398e3})
	const planet1Mesh = new Mesh(planet1Geometry, planet1Material)
	return planet1Mesh
}
export const planet2 = () => {
    const planet2Geometry = new SphereGeometry(0.1, 32, 16)
	const planet2Material = new MeshLambertMaterial({ color: 0xf8f7ff, emissive: 0xe398e3})
	const planet2Mesh = new Mesh(planet2Geometry, planet2Material)
	return planet2Mesh
}
export const planet3 = () => {
	const planet3Geometry = new SphereGeometry(0.1, 32, 16)
	const planet3Material = new MeshLambertMaterial({ color: 0xf8f7ff, emissive: 0xe398e3})
	const planet3Mesh = new Mesh(planet3Geometry, planet3Material)
	return planet3Mesh
}